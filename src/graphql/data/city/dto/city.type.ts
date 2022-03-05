import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { City } from "../entities/city.entity"

@ObjectType()
export class CityListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [City], { nullable: true })
  data?: City[]
}
