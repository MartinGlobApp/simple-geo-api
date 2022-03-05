import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { UserProjectAccess } from "../entities/user-project-access.entity"

@ObjectType()
export class UserProjectAccessListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [UserProjectAccess], { nullable: true })
  data?: UserProjectAccess[]
}
