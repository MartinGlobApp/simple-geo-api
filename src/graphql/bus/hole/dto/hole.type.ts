import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Hole } from "../entities/hole.entity"

@ObjectType()
export class HoleListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Hole], { nullable: true })
  data?: Hole[]
}
