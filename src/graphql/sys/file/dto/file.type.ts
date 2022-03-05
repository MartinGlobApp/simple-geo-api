import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { File } from "../entities/file.entity"

@ObjectType()
export class FileListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [File], { nullable: true })
  data?: File[]
}
