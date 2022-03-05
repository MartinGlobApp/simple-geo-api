import { Field, InputType } from "@nestjs/graphql"
import { IsNotEmpty, IsOptional } from 'class-validator';
import { LoginProviderEnum } from '../../../../core/enums/login-provider.enum';

@InputType()
export class LoginSocialDto {

  @Field(() => Number, { nullable: false })
  @IsNotEmpty()
  providerId: LoginProviderEnum

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  externalUserId: string
}