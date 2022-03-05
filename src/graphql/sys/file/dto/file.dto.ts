import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty, IsOptional } from "class-validator"

@InputType()
export class FileInputDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  id: number

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  filename: string

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  mimeType: string

  @Field(() => String, { nullable: true })
  @IsNotEmpty()
  base64?: string

  @Field(() => String, { nullable: true })
  @IsOptional()
  extension?: string
}
