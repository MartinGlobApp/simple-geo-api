import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { State } from "../entities/state.entity"

@ObjectType()
export class StateListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [State], { nullable: true })
  data?: State[]
}
