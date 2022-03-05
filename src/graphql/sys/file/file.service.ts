import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { getConnection, QueryRunner, Repository } from "typeorm"

import { BaseService, UIFileRequest, UIFileResponse } from "src/core/lib"

import { File } from "./entities/file.entity"
import FileCore from "src/core/lib/utils/file.util"
import { FileInputDto } from "./dto/file.dto"

@Injectable()
export class FileService extends BaseService<File> {
  constructor(
    @InjectRepository(File)
    private readonly engineRepository: Repository<File>,
  ) {
    super(engineRepository)

    this.modelClass = File
  }

  async getFileBase64(fileId: number): Promise<UIFileResponse> {
    const fileObj = await this.engineRepository.findOne(fileId)

    const filename = fileObj.filename.replace(/\.[^/.]+$/, "")

    const urlPath =  `${process.env.URL}${fileObj.id}.${fileObj.extension}`

    return <UIFileResponse>{
      id: fileObj.id,
      filename: filename,
      realFilename: fileObj.filename,
      extension: fileObj.extension,
      mimeType: fileObj.mimeType,
      base64: await FileCore.getBase64({
        id: fileObj?.id,
        filename: fileObj?.filename,
        extension: fileObj?.extension,
        mimeType: fileObj?.mimeType,
      }),
      url: urlPath
    }
  }

  async create(file: FileInputDto, connect: QueryRunner = null): Promise<File> {

    const queryRunner = connect != null ? connect : getConnection().createQueryRunner()

    try {

      if (connect == null) {
        await queryRunner.startTransaction()
      }

      const payload: File = Object.assign(new File(), file)

      const originalExt = file.base64.substring(file.base64.indexOf("/") + 1, file.base64.indexOf("base64"))
      payload.extension = originalExt.replace(";", "")

      const result = await queryRunner.manager.save(payload)

      // add file in store public file
      await FileCore.uploadFile(
        Object.assign(file, {}, <UIFileRequest>{
          id: result.id,
          extension: originalExt.replace(";", "")
        })
      )

      if (connect == null) {
        await queryRunner.commitTransaction()
      }

      return result
    } catch (error) {
      console.log(error)

      await queryRunner.rollbackTransaction()

      throw error
    } finally {

      if (connect == null) {
        await queryRunner.release()
      }
    }
  }
}
