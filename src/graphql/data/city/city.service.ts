import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { City } from "./entities/city.entity"

@Injectable()
export class CityService extends BaseService<City> {
  constructor(
    @InjectRepository(City)
    private readonly engineRepository: Repository<City>
  ) {
    super(engineRepository)

    this.modelClass = City
  }
}
