import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Country } from "./entities/country.entity"

@Injectable()
export class CountryService extends BaseService<Country> {
  constructor(
    @InjectRepository(Country)
    private readonly engineRepository: Repository<Country>
  ) {
    super(engineRepository)

    this.modelClass = Country
  }
}
