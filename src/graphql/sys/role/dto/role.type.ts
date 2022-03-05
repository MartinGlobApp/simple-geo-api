import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Role } from "../entities/role.entity"

@ObjectType()
export class RoleListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Role], { nullable: true })
  data?: Role[]
}
