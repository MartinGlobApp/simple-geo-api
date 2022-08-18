import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { DataVersion } from "./entities/data-version.entity"

@Injectable()
export class DataVersionService extends BaseService<DataVersion> {
  constructor(
    @InjectRepository(DataVersion)
    private readonly engineRepository: Repository<DataVersion>
  ) {
    super(engineRepository)

    this.modelClass = DataVersion
  }
}
