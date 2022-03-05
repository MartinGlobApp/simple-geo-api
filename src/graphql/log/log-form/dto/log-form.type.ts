import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { LogForm } from "../entities/log-form.entity"

@ObjectType()
export class LogFormListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [LogForm], { nullable: true })
  data?: LogForm[]
}
