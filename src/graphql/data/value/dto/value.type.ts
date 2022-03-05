import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Value } from "../entities/value.entity"

@ObjectType()
export class ValueListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Value], { nullable: true })
  data?: Value[]
}
