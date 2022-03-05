import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { ValueType } from "../entities/value-type.entity"

@ObjectType()
export class ValueTypeListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [ValueType], { nullable: true })
  data?: ValueType[]
}
