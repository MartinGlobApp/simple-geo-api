import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Project } from "./entities/project.entity"

@Injectable()
export class ProjectService extends BaseService<Project> {
  constructor(
    @InjectRepository(Project)
    private readonly engineRepository: Repository<Project>
  ) {
    super(engineRepository)

    this.modelClass = Project
  }
}
