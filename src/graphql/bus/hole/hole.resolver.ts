import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { HoleService } from "./hole.service"
import { Hole } from "./entities/hole.entity"

import { HoleInputDto } from "./dto/hole.dto"
import { HoleListPageInfoResponse } from "./dto/hole.type"

@Resolver(() => Hole)
export class HoleResolver {
  constructor(private readonly engineService: HoleService) {}

  @Query(() => HoleListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async holeListPage(@Args("holeCriteria", { type: () => FilterCriteriaInfo }) holeCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(holeCriteria)
  }

  @Query(() => [Hole], { name: "holeFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Hole, { name: "hole" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => Hole)
  @UseGuards(GqlAuthGuard)
  async createHole(@Args("holeInputDto") holeInputDto: HoleInputDto) {
    return await this.engineService.create(holeInputDto)
  }

  @Mutation(() => Hole)
  @UseGuards(GqlAuthGuard)
  async updateHole(@Args("id", { type: () => Int }) id: number, @Args("holeInputDto") holeInputDto: HoleInputDto) {
    return await this.engineService.update(id, holeInputDto)
  }

  @Mutation(() => Hole)
  @UseGuards(GqlAuthGuard)
  async removeHole(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
