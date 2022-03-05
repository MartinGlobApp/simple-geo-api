import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class UserRoleInputDto {
  @Field(() => String)
  @IsNotEmpty()
  userId: number
  
  @Field(() => String)
  @IsNotEmpty()
  roleId: number
}
