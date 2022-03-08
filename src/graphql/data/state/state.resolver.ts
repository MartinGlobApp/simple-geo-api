import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { StateService } from "./state.service"
import { State } from "./entities/state.entity"

import { StateInputDto } from "./dto/state.dto"
import { StateListPageInfoResponse } from "./dto/state.type"

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly engineService: StateService) { }

  @Query(() => StateListPageInfoResponse)
  //@UseGuards(GqlAuthGuard)
  async stateListPage(@Args("stateCriteria", { type: () => FilterCriteriaInfo }) stateCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(stateCriteria)
  }

  @Query(() => [State], { name: "stateFindAll" })
  //@UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => State, { name: "state" })
  //@UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => State)
  @UseGuards(GqlAuthGuard)
  async createState(@Args("stateInputDto") stateInputDto: StateInputDto) {
    return await this.engineService.create(stateInputDto)
  }

  @Mutation(() => State)
  @UseGuards(GqlAuthGuard)
  async updateState(@Args("id", { type: () => Int }) id: number, @Args("stateInputDto") stateInputDto: StateInputDto) {
    return await this.engineService.update(id, stateInputDto)
  }

  @Mutation(() => State)
  @UseGuards(GqlAuthGuard)
  async removeState(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
