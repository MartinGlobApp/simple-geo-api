import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { UserService } from "./user.service"
import { UserResolver } from "./user.resolver"

import { User } from "./entities/user.entity"
import { UserRoleModule } from "../user-role/user-role.module"
import { MailModule } from '../../../mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => UserRoleModule),
    forwardRef(() => MailModule),
  ],
  providers: [UserResolver, UserService],
  exports: [UserResolver, UserService],
})
export class UserModule {}
