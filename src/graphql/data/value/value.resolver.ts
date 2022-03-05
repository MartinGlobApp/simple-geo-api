import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { ValueService } from "./value.service"
import { Value } from "./entities/value.entity"

import { ValueInputDto } from "./dto/value.dto"
import { ValueListPageInfoResponse } from "./dto/value.type"

@Resolver(() => Value)
export class ValueResolver {
  constructor(private readonly engineService: ValueService) {}

  @Query(() => ValueListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async valueListPage(@Args("valueCriteria", { type: () => FilterCriteriaInfo }) valueCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(valueCriteria)
  }

  @Query(() => [Value], { name: "valueFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Value, { name: "value" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => Value)
  @UseGuards(GqlAuthGuard)
  async createValue(@Args("valueInputDto") valueInputDto: ValueInputDto) {
    return await this.engineService.create(valueInputDto)
  }

  @Mutation(() => Value)
  @UseGuards(GqlAuthGuard)
  async updateValue(@Args("id", { type: () => Int }) id: number, @Args("valueInputDto") valueInputDto: ValueInputDto) {
    return await this.engineService.update(id, valueInputDto)
  }

  @Mutation(() => Value)
  @UseGuards(GqlAuthGuard)
  async removeValue(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
