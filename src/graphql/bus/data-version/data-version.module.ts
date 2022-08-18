import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { DataVersionService } from "./data-version.service"
import { DataVersionResolver } from "./data-version.resolver"

import { DataVersion } from "./entities/data-version.entity"

@Module({
  imports: [TypeOrmModule.forFeature([DataVersion])],
  providers: [DataVersionResolver, DataVersionService],
  exports: [DataVersionResolver, DataVersionService],
})
export class DataVersionModule {}
