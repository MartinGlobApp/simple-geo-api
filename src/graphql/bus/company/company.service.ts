import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Company } from "./entities/company.entity"

@Injectable()
export class CompanyService extends BaseService<Company> {
  constructor(
    @InjectRepository(Company)
    private readonly engineRepository: Repository<Company>
  ) {
    super(engineRepository)

    this.modelClass = Company
  }
}
