import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { DataVersion } from "../entities/data-version.entity"

@ObjectType()
export class DataVersionListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [DataVersion], { nullable: true })
  data?: DataVersion[]
}
