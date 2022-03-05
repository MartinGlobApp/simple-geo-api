import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { UserProjectAccessService } from "./user-project-access.service"
import { UserProjectAccessResolver } from "./user-project-access.resolver"

import { UserProjectAccess } from "./entities/user-project-access.entity"

@Module({
  imports: [TypeOrmModule.forFeature([UserProjectAccess])],
  providers: [UserProjectAccessResolver, UserProjectAccessService],
  exports: [UserProjectAccessResolver, UserProjectAccessService],
})
export class UserProjectAccessModule {}
