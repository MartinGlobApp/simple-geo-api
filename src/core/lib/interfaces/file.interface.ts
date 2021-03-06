import { Field, InputType, ObjectType } from "@nestjs/graphql"

@InputType()
export class UIFileRequest {
  @Field(() => String, { nullable: true })
  id: number

  @Field(() => String, { nullable: true })
  filename: string

  @Field(() => String, { nullable: true })
  mimeType: string

  @Field(() => String, { nullable: true })
  base64?: string

  @Field(() => String, { nullable: true })
  extension?: string
}

@ObjectType()
export class UIFileResponse {
  @Field(() => String, { nullable: true })
  id?: number

  @Field(() => String, { nullable: true })
  filename: string

  @Field(() => String, { nullable: true })
  realFilename?: string

  @Field(() => String, { nullable: true })
  mimeType: string

  @Field(() => String, { nullable: true })
  extension: string

  @Field(() => String, { nullable: true })
  base64: string

  @Field(() => String, { nullable: true })
  url?: string
}
