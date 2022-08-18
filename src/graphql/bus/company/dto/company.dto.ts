import { InputType, Field } from "@nestjs/graphql"
import { IsNotEmpty } from "class-validator"

@InputType()
export class CompanyInputDto {

  @Field(() => String)
  @IsNotEmpty()
  data: string

  @Field(() => Number)
  dataSizeInBytes: number
}
