import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { UserRoleService } from "./user-role.service"
import { UserRoleResolver } from "./user-role.resolver"

import { UserRole } from "./entities/user-role.entity"

@Module({
  imports: [TypeOrmModule.forFeature([UserRole])],
  providers: [UserRoleResolver, UserRoleService],
  exports: [UserRoleResolver, UserRoleService],
})
export class UserRoleModule {}
