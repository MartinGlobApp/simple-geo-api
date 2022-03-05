import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Company } from "../entities/company.entity"

@ObjectType()
export class CompanyListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Company], { nullable: true })
  data?: Company[]
}
