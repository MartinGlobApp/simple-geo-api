import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { LogType } from "../entities/log-type.entity"

@ObjectType()
export class LogTypeListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [LogType], { nullable: true })
  data?: LogType[]
}
