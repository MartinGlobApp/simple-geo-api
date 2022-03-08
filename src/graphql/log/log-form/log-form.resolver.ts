import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { LogFormService } from "./log-form.service"
import { LogForm } from "./entities/log-form.entity"

import { LogFormInputDto } from "./dto/log-form.dto"
import { LogFormListPageInfoResponse } from "./dto/log-form.type"

@Resolver(() => LogForm)
export class LogFormResolver {
  constructor(private readonly engineService: LogFormService) {}

  @Query(() => LogFormListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async logFormListPage(@Args("logFormCriteria", { type: () => FilterCriteriaInfo }) logFormCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(logFormCriteria)
  }

  @Query(() => [LogForm], { name: "logFormFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => LogForm, { name: "logForm" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => LogForm)
  @UseGuards(GqlAuthGuard)
  async createLogForm(@Args("logFormInputDto") logFormInputDto: LogFormInputDto) {
    return await this.engineService.create(logFormInputDto)
  }

  @Mutation(() => LogForm)
  @UseGuards(GqlAuthGuard)
  async updateLogForm(@Args("id", { type: () => Int }) id: number, @Args("logFormInputDto") logFormInputDto: LogFormInputDto) {
    return await this.engineService.update(id, logFormInputDto)
  }

  @Mutation(() => LogForm)
  @UseGuards(GqlAuthGuard)
  async removeLogForm(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
