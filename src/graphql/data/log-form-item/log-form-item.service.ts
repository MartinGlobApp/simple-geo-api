import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { LogFormItem } from "./entities/log-form-item.entity"

@Injectable()
export class LogFormItemService extends BaseService<LogFormItem> {
  constructor(
    @InjectRepository(LogFormItem)
    private readonly engineRepository: Repository<LogFormItem>
  ) {
    super(engineRepository)

    this.modelClass = LogFormItem
  }
}
