import { Field, PartialType, ObjectType } from "@nestjs/graphql"

import { ListPageInfoResponse } from "src/core/lib"

import { Project } from "../entities/project.entity"

@ObjectType()
export class ProjectListPageInfoResponse extends PartialType(ListPageInfoResponse) {
  @Field(() => [Project], { nullable: true })
  data?: Project[]
}
