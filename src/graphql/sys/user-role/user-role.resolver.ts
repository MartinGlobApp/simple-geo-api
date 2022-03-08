import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { UserRoleService } from "./user-role.service"
import { UserRole } from "./entities/user-role.entity"

import { UserRoleInputDto } from "./dto/user-role.dto"
import { UserRoleListPageInfoResponse } from "./dto/user-role.type"

@Resolver(() => UserRole)
export class UserRoleResolver {
  constructor(private readonly engineService: UserRoleService) { }

  @Query(() => UserRoleListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async userRoleListPage(@Args("userRoleCriteria", { type: () => FilterCriteriaInfo }) userRoleCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(userRoleCriteria)
  }

  @Query(() => [UserRole], { name: "userRoleFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => UserRole, { name: "userRole" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(String(id))
  }

  @Mutation(() => UserRole)
  @UseGuards(GqlAuthGuard)
  async createUserRole(@Args("userRoleInputDto") userRoleInputDto: UserRoleInputDto) {
    return await this.engineService.create(userRoleInputDto)
  }

  @Mutation(() => UserRole)
  @UseGuards(GqlAuthGuard)
  async updateUserRole(@Args("id", { type: () => Int }) id: number, @Args("userRoleInputDto") userRoleInputDto: UserRoleInputDto) {
    return await this.engineService.update(id, userRoleInputDto)
  }

  @Mutation(() => UserRole)
  @UseGuards(GqlAuthGuard)
  async removeUserRole(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
