import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { LogType } from "./entities/log-type.entity"

@Injectable()
export class LogTypeService extends BaseService<LogType> {
  constructor(
    @InjectRepository(LogType)
    private readonly engineRepository: Repository<LogType>
  ) {
    super(engineRepository)

    this.modelClass = LogType
  }
}
