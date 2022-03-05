import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { LogFormItem } from "../entities/log-form-item.entity"

@ObjectType()
export class LogFormItemListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [LogFormItem], { nullable: true })
  data?: LogFormItem[]
}
