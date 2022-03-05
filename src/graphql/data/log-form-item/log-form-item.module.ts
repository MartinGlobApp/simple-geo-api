import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { LogFormItemService } from "./log-form-item.service"
import { LogFormItemResolver } from "./log-form-item.resolver"

import { LogFormItem } from "./entities/log-form-item.entity"

@Module({
  imports: [TypeOrmModule.forFeature([LogFormItem])],
  providers: [LogFormItemResolver, LogFormItemService],
  exports: [LogFormItemResolver, LogFormItemService],
})
export class LogFormItemModule {}
