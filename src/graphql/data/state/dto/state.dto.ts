import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class StateInputDto {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String)
  @IsNotEmpty()
  countryId: string
}
