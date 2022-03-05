import { Field, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class LoginSuccessResponse {

  @Field(() => String, { nullable: true })
  accessToken?: string

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  fromSocial?: boolean

  @Field(() => [String], { nullable: true })
  roles?: string[]
}