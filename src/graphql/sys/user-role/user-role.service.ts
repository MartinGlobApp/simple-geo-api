import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { UserRole } from "./entities/user-role.entity"

@Injectable()
export class UserRoleService extends BaseService<UserRole> {
  constructor(
    @InjectRepository(UserRole)
    private readonly engineRepository: Repository<UserRole>
  ) {
    super(engineRepository)

    this.modelClass = UserRole
  }
}
