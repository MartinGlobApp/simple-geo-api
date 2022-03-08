import { InputType, Field } from "@nestjs/graphql"
import { IsEmpty, IsNotEmpty, IsOptional } from "class-validator"

@InputType()
export class ProjectInputDto {
  @Field(() => String, { nullable: true })
  @IsOptional()
  id: string

  @Field(() => String)
  @IsNotEmpty()
  name: string

  @Field(() => String)
  @IsNotEmpty()
  companyId: string

  @Field(() => String)
  @IsNotEmpty()
  cityId: string

  @Field(() => String)
  @IsNotEmpty()
  latitude: string

  @Field(() => String)
  @IsNotEmpty()
  longitude: string
}
