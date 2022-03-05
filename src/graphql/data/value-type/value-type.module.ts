import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { ValueTypeService } from "./value-type.service"
import { ValueTypeResolver } from "./value-type.resolver"

import { ValueType } from "./entities/value-type.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ValueType])],
  providers: [ValueTypeResolver, ValueTypeService],
  exports: [ValueTypeResolver, ValueTypeService],
})
export class ValueTypeModule {}
