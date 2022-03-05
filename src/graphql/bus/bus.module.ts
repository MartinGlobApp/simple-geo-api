import { Module } from "@nestjs/common"

import { CompanyModule } from "./company/company.module"
import { HoleModule } from "./hole/hole.module"
import { ProjectModule } from "./project/project.module"

@Module({
  imports: [CompanyModule, HoleModule, ProjectModule],
})
export class BusModule {}
