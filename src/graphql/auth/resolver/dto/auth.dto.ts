import { Field, InputType } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class LoginDto {

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  username: string

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  password: string
}