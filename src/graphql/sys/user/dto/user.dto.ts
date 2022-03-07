import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty, IsOptional } from "class-validator"

@InputType()
export class UserInputDto {
  @Field(() => String)
  @IsNotEmpty()
  username: string
  
  @Field(() => String)
  @IsNotEmpty()
  password: string
}

