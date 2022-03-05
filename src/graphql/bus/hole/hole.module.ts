import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { HoleService } from "./hole.service"
import { HoleResolver } from "./hole.resolver"

import { Hole } from "./entities/hole.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Hole])],
  providers: [HoleResolver, HoleService],
  exports: [HoleResolver, HoleService],
})
export class HoleModule {}
