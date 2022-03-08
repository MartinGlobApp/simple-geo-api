import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { LogTypeService } from "./log-type.service"
import { LogType } from "./entities/log-type.entity"

import { LogTypeInputDto } from "./dto/log-type.dto"
import { LogTypeListPageInfoResponse } from "./dto/log-type.type"

@Resolver(() => LogType)
export class LogTypeResolver {
  constructor(private readonly engineService: LogTypeService) {}

  @Query(() => LogTypeListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async logTypeListPage(@Args("logTypeCriteria", { type: () => FilterCriteriaInfo }) logTypeCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(logTypeCriteria)
  }

  @Query(() => [LogType], { name: "logTypeFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => LogType, { name: "logType" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => LogType)
  @UseGuards(GqlAuthGuard)
  async createLogType(@Args("logTypeInputDto") logTypeInputDto: LogTypeInputDto) {
    return await this.engineService.create(logTypeInputDto)
  }

  @Mutation(() => LogType)
  @UseGuards(GqlAuthGuard)
  async updateLogType(@Args("id", { type: () => Int }) id: number, @Args("logTypeInputDto") logTypeInputDto: LogTypeInputDto) {
    return await this.engineService.update(id, logTypeInputDto)
  }

  @Mutation(() => LogType)
  @UseGuards(GqlAuthGuard)
  async removeLogType(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
