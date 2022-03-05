import { UseGuards } from "@nestjs/common"
import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql"

import { FilterCriteriaInfo } from "src/core/lib"
import { GqlAuthGuard } from "../../../graphql/auth/guard/ggl-auth.guard"

import { ProjectService } from "./project.service"
import { Project } from "./entities/project.entity"

import { ProjectInputDto } from "./dto/project.dto"
import { ProjectListPageInfoResponse } from "./dto/project.type"

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly engineService: ProjectService) {}

  @Query(() => ProjectListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async projectListPage(@Args("projectCriteria", { type: () => FilterCriteriaInfo }) projectCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(projectCriteria)
  }

  @Query(() => [Project], { name: "projectFindAll" })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args("criteria", { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria)
  }

  @Query(() => Project, { name: "project" })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.findOne(id)
  }

  @Mutation(() => Project)
  @UseGuards(GqlAuthGuard)
  async createProject(@Args("projectInputDto") projectInputDto: ProjectInputDto) {
    return await this.engineService.create(projectInputDto)
  }

  @Mutation(() => Project)
  @UseGuards(GqlAuthGuard)
  async updateProject(@Args("id", { type: () => Int }) id: number, @Args("projectInputDto") projectInputDto: ProjectInputDto) {
    return await this.engineService.update(id, projectInputDto)
  }

  @Mutation(() => Project)
  @UseGuards(GqlAuthGuard)
  async removeProject(@Args("id", { type: () => Int }) id: number) {
    return await this.engineService.remove(id)
  }
}
