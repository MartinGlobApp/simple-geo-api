import { Module } from "@nestjs/common"

import { CompanyModule } from "./company/company.module"
import { DataVersionModule } from "./data-version/data-version.module"

@Module({
  imports: [CompanyModule, DataVersionModule],
})
export class BusModule {}
