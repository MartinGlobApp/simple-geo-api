import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { ValueService } from "./value.service"
import { ValueResolver } from "./value.resolver"

import { Value } from "./entities/value.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Value])],
  providers: [ValueResolver, ValueService],
  exports: [ValueResolver, ValueService],
})
export class ValueModule {}
