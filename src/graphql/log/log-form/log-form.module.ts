import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { LogFormService } from "./log-form.service"
import { LogFormResolver } from "./log-form.resolver"

import { LogForm } from "./entities/log-form.entity"

@Module({
  imports: [TypeOrmModule.forFeature([LogForm])],
  providers: [LogFormResolver, LogFormService],
  exports: [LogFormResolver, LogFormService],
})
export class LogFormModule {}
