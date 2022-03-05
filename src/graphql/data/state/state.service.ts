import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { State } from "./entities/state.entity"

@Injectable()
export class StateService extends BaseService<State> {
  constructor(
    @InjectRepository(State)
    private readonly engineRepository: Repository<State>
  ) {
    super(engineRepository)

    this.modelClass = State
  }
}
