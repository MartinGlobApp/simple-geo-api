import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { ValueType } from "./entities/value-type.entity"

@Injectable()
export class ValueTypeService extends BaseService<ValueType> {
  constructor(
    @InjectRepository(ValueType)
    private readonly engineRepository: Repository<ValueType>
  ) {
    super(engineRepository)

    this.modelClass = ValueType
  }
}
