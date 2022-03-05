import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class CountryInputDto {
  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String)
  @IsNotEmpty()
  code2: string

  @Field(() => String)
  @IsNotEmpty()
  code3: string
}
