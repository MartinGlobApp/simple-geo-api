import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { CountryService } from "./country.service"
import { Country } from "./entities/country.entity"

import { CountryInputDto } from "./dto/country.dto"
import { CountryListPageInfoResponse } from "./dto/country.type"

@Resolver(() => Country)
export class CountryResolver {
  constructor(private readonly engineService: CountryService) { }

  @Query(() => CountryListPageInfoResponse)
  //@UseGuards(GqlAuthGuard)
  async countryListPage(@Args("countryCriteria", { type: () => FilterCriteriaInfo }) countryCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(countryCriteria)
  }

  @Query(() => [Country], { name: "countryFindAll" })
  //@UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Country, { name: "country" })
  //@UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => Country)
  @UseGuards(GqlAuthGuard)
  async createCountry(@Args("countryInputDto") countryInputDto: CountryInputDto) {
    return await this.engineService.create(countryInputDto)
  }

  @Mutation(() => Country)
  @UseGuards(GqlAuthGuard)
  async updateCountry(@Args("id", { type: () => Int }) id: number, @Args("countryInputDto") countryInputDto: CountryInputDto) {
    return await this.engineService.update(id, countryInputDto)
  }

  @Mutation(() => Country)
  @UseGuards(GqlAuthGuard)
  async removeCountry(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
