import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { UserProjectAccessService } from "./user-project-access.service"
import { UserProjectAccess } from "./entities/user-project-access.entity"

import { UserProjectAccessInputDto } from "./dto/user-project-access.dto"
import { UserProjectAccessListPageInfoResponse } from "./dto/user-project-access.type"

@Resolver(() => UserProjectAccess)
export class UserProjectAccessResolver {
  constructor(private readonly engineService: UserProjectAccessService) {}

  @Query(() => UserProjectAccessListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async userProjectAccessListPage(@Args("userProjectAccessCriteria", { type: () => FilterCriteriaInfo }) userProjectAccessCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(userProjectAccessCriteria)
  }

  @Query(() => [UserProjectAccess], { name: "userProjectAccessFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => UserProjectAccess, { name: "userProjectAccess" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => UserProjectAccess)
  @UseGuards(GqlAuthGuard)
  async createUserProjectAccess(@Args("userProjectAccessInputDto") userProjectAccessInputDto: UserProjectAccessInputDto) {
    return await this.engineService.create(userProjectAccessInputDto)
  }

  @Mutation(() => UserProjectAccess)
  @UseGuards(GqlAuthGuard)
  async updateUserProjectAccess(@Args("id", { type: () => Int }) id: number, @Args("userProjectAccessInputDto") userProjectAccessInputDto: UserProjectAccessInputDto) {
    return await this.engineService.update(id, userProjectAccessInputDto)
  }

  @Mutation(() => UserProjectAccess)
  @UseGuards(GqlAuthGuard)
  async removeUserProjectAccess(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
