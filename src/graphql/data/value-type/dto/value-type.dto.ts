import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class ValueTypeInputDto {
  @Field(() => String)
  @IsNotEmpty()
  name: string
}
