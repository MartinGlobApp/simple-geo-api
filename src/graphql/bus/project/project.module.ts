import { forwardRef, Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { ProjectService } from "./project.service"
import { ProjectResolver } from "./project.resolver"

import { Project } from "./entities/project.entity"

@Module({
  imports: [
    TypeOrmModule.forFeature([Project])
  ],
  providers: [ProjectResolver, ProjectService],
  exports: [ProjectResolver, ProjectService],
})
export class ProjectModule {}
