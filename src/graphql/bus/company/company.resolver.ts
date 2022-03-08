import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { CompanyService } from "./company.service"
import { Company } from "./entities/company.entity"

import { CompanyInputDto } from "./dto/company.dto"
import { CompanyListPageInfoResponse } from "./dto/company.type"

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly engineService: CompanyService) {}

  @Query(() => CompanyListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async companyListPage(@Args("companyCriteria", { type: () => FilterCriteriaInfo }) companyCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(companyCriteria)
  }

  @Query(() => [Company], { name: "companyFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Company, { name: "company" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => String }) id: string) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => Company)
  @UseGuards(GqlAuthGuard)
  async createCompany(@Args("companyInputDto") companyInputDto: CompanyInputDto) {
    return await this.engineService.create(companyInputDto)
  }

  @Mutation(() => Company)
  @UseGuards(GqlAuthGuard)
  async updateCompany(@Args("id", { type: () => Int }) id: number, @Args("companyInputDto") companyInputDto: CompanyInputDto) {
    return await this.engineService.update(id, companyInputDto)
  }

  @Mutation(() => Company)
  @UseGuards(GqlAuthGuard)
  async removeCompany(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
