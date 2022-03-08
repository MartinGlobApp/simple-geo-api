import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo, UIFileResponse } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { FileService } from "./file.service"
import { File } from "./entities/file.entity"

import { FileInputDto } from "./dto/file.dto"
import { FileListPageInfoResponse } from "./dto/file.type"

@Resolver(() => File)
export class FileResolver {
  constructor(private readonly engineService: FileService) { }

  @Query(() => FileListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async fileListPage(@Args("fileCriteria", { type: () => FilterCriteriaInfo }) fileCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(fileCriteria)
  }

  @Query(() => [File], { name: "fileFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => File, { name: "file" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(String(id))
  }

  @Query(() => UIFileResponse, { name: "fileBase64" })
  @UseGuards(GqlAuthGuard)
  async fileDownload(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.getFileBase64(id)
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async createFile(@Args("fileInputDto") fileInputDto: FileInputDto) {
    return await this.engineService.create(fileInputDto)
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async updateFile(@Args("id", { type: () => Int }) id: number, @Args("fileInputDto") fileInputDto: FileInputDto) {
    return await this.engineService.update(id, fileInputDto)
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async removeFile(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
