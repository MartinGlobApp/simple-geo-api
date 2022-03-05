import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty, IsOptional } from "class-validator"
import { LoginProviderEnum } from "src/core/enums/login-provider.enum";

@InputType()
export class UserInputDto {
  @Field(() => String)
  @IsNotEmpty()
  username: string
  
  @Field(() => String)
  @IsNotEmpty()
  password: string
}

