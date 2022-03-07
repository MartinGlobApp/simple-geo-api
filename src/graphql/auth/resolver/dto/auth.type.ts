import { Field, ObjectType, Int } from '@nestjs/graphql';
import { UserRole } from '../../../sys/user-role/entities/user-role.entity';

@ObjectType()
export class LoginSuccessResponse {

  @Field(() => String, { nullable: true })
  accessToken?: string

  @Field(() => Boolean, { nullable: true, defaultValue: false })
  fromSocial?: boolean

  @Field(() => [UserRole], { nullable: true })
  userRoles?: UserRole[]
}