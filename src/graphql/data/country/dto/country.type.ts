import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Country } from "../entities/country.entity"

@ObjectType()
export class CountryListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Country], { nullable: true })
  data?: Country[]
}
