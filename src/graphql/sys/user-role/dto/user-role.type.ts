import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { UserRole } from "../entities/user-role.entity"

@ObjectType()
export class UserRoleListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [UserRole], { nullable: true })
  data?: UserRole[]
}
