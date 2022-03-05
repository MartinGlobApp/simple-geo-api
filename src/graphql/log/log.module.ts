import { Module } from "@nestjs/common"

import { LogFormModule } from "./log-form/log-form.module"

@Module({
  imports: [LogFormModule],
})
export class LogModule {}
