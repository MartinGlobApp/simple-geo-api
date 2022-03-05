import { Module } from "@nestjs/common"

import { AuthModule } from "./auth/auth.module"
import { BusModule } from "./bus/bus.module"
import { DataModule } from "./data/data.module"
import { LogModule } from "./log/log.module"
import { SysModule } from "./sys/sys.module"

@Module({
  imports: [AuthModule, BusModule, DataModule, LogModule, SysModule],
})
export class HQLModule {}
