import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Value } from "./entities/value.entity"

@Injectable()
export class ValueService extends BaseService<Value> {
  constructor(
    @InjectRepository(Value)
    private readonly engineRepository: Repository<Value>
  ) {
    super(engineRepository)

    this.modelClass = Value
  }
}
