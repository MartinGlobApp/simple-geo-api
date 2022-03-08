import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { RoleService } from "./role.service"
import { Role } from "./entities/role.entity"

import { RoleInputDto } from "./dto/role.dto"
import { RoleListPageInfoResponse } from "./dto/role.type"

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly engineService: RoleService) { }

  @Query(() => RoleListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async roleListPage(@Args("roleCriteria", { type: () => FilterCriteriaInfo }) roleCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(roleCriteria)
  }

  @Query(() => [Role], { name: "roleFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Role, { name: "role" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(String(id))
  }

  @Mutation(() => Role)
  @UseGuards(GqlAuthGuard)
  async createRole(@Args("roleInputDto") roleInputDto: RoleInputDto) {
    return await this.engineService.create(roleInputDto)
  }

  @Mutation(() => Role)
  @UseGuards(GqlAuthGuard)
  async updateRole(@Args("id", { type: () => Int }) id: number, @Args("roleInputDto") roleInputDto: RoleInputDto) {
    return await this.engineService.update(id, roleInputDto)
  }

  @Mutation(() => Role)
  @UseGuards(GqlAuthGuard)
  async removeRole(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
