import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class CityInputDto {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String)
  @IsNotEmpty()
  stateId: number
}
