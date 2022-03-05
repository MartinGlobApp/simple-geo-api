import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { LogTypeService } from "./log-type.service"
import { LogTypeResolver } from "./log-type.resolver"

import { LogType } from "./entities/log-type.entity"

@Module({
  imports: [TypeOrmModule.forFeature([LogType])],
  providers: [LogTypeResolver, LogTypeService],
  exports: [LogTypeResolver, LogTypeService],
})
export class LogTypeModule {}
