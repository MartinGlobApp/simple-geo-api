import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { CompanyService } from "./company.service"
import { CompanyResolver } from "./company.resolver"

import { Company } from "./entities/company.entity"

@Module({
  imports: [TypeOrmModule.forFeature([Company])],
  providers: [CompanyResolver, CompanyService],
  exports: [CompanyResolver, CompanyService],
})
export class CompanyModule {}
