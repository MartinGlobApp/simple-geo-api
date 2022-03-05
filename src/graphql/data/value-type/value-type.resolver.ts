import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { ValueTypeService } from "./value-type.service"
import { ValueType } from "./entities/value-type.entity"

import { ValueTypeInputDto } from "./dto/value-type.dto"
import { ValueTypeListPageInfoResponse } from "./dto/value-type.type"

@Resolver(() => ValueType)
export class ValueTypeResolver {
  constructor(private readonly engineService: ValueTypeService) {}

  @Query(() => ValueTypeListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async valueTypeListPage(@Args("valueTypeCriteria", { type: () => FilterCriteriaInfo }) valueTypeCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(valueTypeCriteria)
  }

  @Query(() => [ValueType], { name: "valueTypeFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => ValueType, { name: "valueType" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => ValueType)
  @UseGuards(GqlAuthGuard)
  async createValueType(@Args("valueTypeInputDto") valueTypeInputDto: ValueTypeInputDto) {
    return await this.engineService.create(valueTypeInputDto)
  }

  @Mutation(() => ValueType)
  @UseGuards(GqlAuthGuard)
  async updateValueType(@Args("id", { type: () => Int }) id: number, @Args("valueTypeInputDto") valueTypeInputDto: ValueTypeInputDto) {
    return await this.engineService.update(id, valueTypeInputDto)
  }

  @Mutation(() => ValueType)
  @UseGuards(GqlAuthGuard)
  async removeValueType(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
