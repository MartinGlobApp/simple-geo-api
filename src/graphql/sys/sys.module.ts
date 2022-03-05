import { Module } from "@nestjs/common"

import { FileModule } from "./file/file.module"
import { RoleModule } from "./role/role.module"
import { UserModule } from "./user/user.module"
import { UserProjectAccessModule } from "./user-project-access/user-project-access.module"
import { UserRoleModule } from "./user-role/user-role.module"

@Module({
  imports: [FileModule, RoleModule, UserModule, UserProjectAccessModule, UserRoleModule],
})
export class SysModule {}
