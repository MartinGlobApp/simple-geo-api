import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { LogForm } from "./entities/log-form.entity"

@Injectable()
export class LogFormService extends BaseService<LogForm> {
  constructor(
    @InjectRepository(LogForm)
    private readonly engineRepository: Repository<LogForm>
  ) {
    super(engineRepository)

    this.modelClass = LogForm
  }
}
