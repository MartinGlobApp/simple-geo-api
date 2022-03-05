import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { FilterCriteriaInfo } from 'src/core/lib';
import { GqlAuthGuard } from '../../../graphql/auth/guard/ggl-auth.guard';

import { UserService } from './user.service';
import { User } from './entities/user.entity';

import { UserInputDto } from './dto/user.dto';
import { UserListPageInfoResponse } from './dto/user.type';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly engineService: UserService) {}

  @Query(() => UserListPageInfoResponse)
  @UseGuards(GqlAuthGuard)
  async userListPage(@Args('userCriteria', { type: () => FilterCriteriaInfo }) userCriteria: FilterCriteriaInfo) {
    return await this.engineService.listPage(userCriteria);
  }

  @Query(() => [User], { name: 'userFindAll' })
  @UseGuards(GqlAuthGuard)
  async findAll(@Args('criteria', { type: () => FilterCriteriaInfo, nullable: true }) criteria: FilterCriteriaInfo) {
    return await this.engineService.findAll(criteria);
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return await this.engineService.findOne(id);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async createUser(@Args('userInputDto') userInputDto: UserInputDto) {
    return await this.engineService.create(userInputDto);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async updateUser(@Args('id', { type: () => Int }) id: number, @Args('userInputDto') userInputDto: UserInputDto) {
    return await this.engineService.update(id, userInputDto);
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async removeUser(@Args('id', { type: () => Int }) id: number) {
    return await this.engineService.remove(id);
  }
}
