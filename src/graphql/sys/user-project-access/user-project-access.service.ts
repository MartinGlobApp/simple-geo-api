import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { UserProjectAccess } from "./entities/user-project-access.entity"

@Injectable()
export class UserProjectAccessService extends BaseService<UserProjectAccess> {
  constructor(
    @InjectRepository(UserProjectAccess)
    private readonly engineRepository: Repository<UserProjectAccess>
  ) {
    super(engineRepository)

    this.modelClass = UserProjectAccess
  }
}
