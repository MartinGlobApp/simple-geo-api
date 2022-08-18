import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { DataVersionService } from "./data-version.service"
import { DataVersion } from "./entities/data-version.entity"

import { DataVersionInputDto } from "./dto/data-version.dto"
import { DataVersionListPageInfoResponse } from "./dto/data-version.type"

@Resolver(() => DataVersion)
export class DataVersionResolver {
  constructor(private readonly engineService: DataVersionService) {}

  @Query(() => DataVersionListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async dataVersionListPage(@Args("dataVersionCriteria", { type: () => FilterCriteriaInfo }) dataVersionCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(dataVersionCriteria)
  }

  @Query(() => [DataVersion], { name: "dataVersionFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => DataVersion, { name: "dataVersion" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOneByNumberId(id)
  }

  @Mutation(() => DataVersion)
  @UseGuards(GqlAuthGuard)
  async createDataVersion(@Args("dataVersionInputDto") dataVersionInputDto: DataVersionInputDto) {
    return await this.engineService.create(dataVersionInputDto)
  }

  @Mutation(() => DataVersion)
  @UseGuards(GqlAuthGuard)
  async updateDataVersion(@Args("id", { type: () => Int }) id: number, @Args("dataVersionInputDto") dataVersionInputDto: DataVersionInputDto) {
    return await this.engineService.update(id, dataVersionInputDto)
  }

  @Mutation(() => DataVersion)
  @UseGuards(GqlAuthGuard)
  async removeDataVersion(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
