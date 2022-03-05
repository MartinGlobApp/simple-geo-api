import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { User } from "../entities/user.entity"

@ObjectType()
export class UserListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [User], { nullable: true })
  data?: User[]
}
