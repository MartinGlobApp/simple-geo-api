import { Module } from "@nestjs/common"

import { AuthModule } from "./auth/auth.module"
import { BusModule } from "./bus/bus.module"
import { SysModule } from "./sys/sys.module"

@Module({
  imports: [AuthModule, BusModule, SysModule],
})
export class HQLModule {}
