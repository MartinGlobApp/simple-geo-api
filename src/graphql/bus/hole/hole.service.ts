import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Hole } from "./entities/hole.entity"

@Injectable()
export class HoleService extends BaseService<Hole> {
  constructor(
    @InjectRepository(Hole)
    private readonly engineRepository: Repository<Hole>
  ) {
    super(engineRepository)

    this.modelClass = Hole
  }
}
