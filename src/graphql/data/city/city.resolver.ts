import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { CityService } from "./city.service"
import { City } from "./entities/city.entity"

import { CityInputDto } from "./dto/city.dto"
import { CityListPageInfoResponse } from "./dto/city.type"

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly engineService: CityService) { }

  @Query(() => CityListPageInfoResponse)
  // @UseGuards(GqlAuthGuard)
  async cityListPage(@Args("cityCriteria", { type: () => FilterCriteriaInfo }) cityCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(cityCriteria)
  }

  @Query(() => [City], { name: "cityFindAll" })
  // @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => City, { name: "city" })
  // @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => City)
  @UseGuards(GqlAuthGuard)
  async createCity(@Args("cityInputDto") cityInputDto: CityInputDto) {
    return await this.engineService.create(cityInputDto)
  }

  @Mutation(() => City)
  @UseGuards(GqlAuthGuard)
  async updateCity(@Args("id", { type: () => Int }) id: number, @Args("cityInputDto") cityInputDto: CityInputDto) {
    return await this.engineService.update(id, cityInputDto)
  }

  @Mutation(() => City)
  @UseGuards(GqlAuthGuard)
  async removeCity(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
