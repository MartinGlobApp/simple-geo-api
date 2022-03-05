import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { LogFormItemService } from "./log-form-item.service"
import { LogFormItem } from "./entities/log-form-item.entity"

import { LogFormItemInputDto } from "./dto/log-form-item.dto"
import { LogFormItemListPageInfoResponse } from "./dto/log-form-item.type"

@Resolver(() => LogFormItem)
export class LogFormItemResolver {
  constructor(private readonly engineService: LogFormItemService) {}

  @Query(() => LogFormItemListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async logFormItemListPage(@Args("logFormItemCriteria", { type: () => FilterCriteriaInfo }) logFormItemCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(logFormItemCriteria)
  }

  @Query(() => [LogFormItem], { name: "logFormItemFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => LogFormItem, { name: "logFormItem" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => LogFormItem)
  @UseGuards(GqlAuthGuard)
  async createLogFormItem(@Args("logFormItemInputDto") logFormItemInputDto: LogFormItemInputDto) {
    return await this.engineService.create(logFormItemInputDto)
  }

  @Mutation(() => LogFormItem)
  @UseGuards(GqlAuthGuard)
  async updateLogFormItem(@Args("id", { type: () => Int }) id: number, @Args("logFormItemInputDto") logFormItemInputDto: LogFormItemInputDto) {
    return await this.engineService.update(id, logFormItemInputDto)
  }

  @Mutation(() => LogFormItem)
  @UseGuards(GqlAuthGuard)
  async removeLogFormItem(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
