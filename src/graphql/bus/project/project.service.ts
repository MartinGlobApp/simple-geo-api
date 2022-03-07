import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { BaseService } from "src/core/lib"

import { Project } from "./entities/project.entity"
import { RoleEnum } from "src/core/enums/role.enum"
import { UserProjectAccess } from '../../sys/user-project-access/entities/user-project-access.entity';
import { UserProjectAccessService } from '../../sys/user-project-access/user-project-access.service';

@Injectable()
export class ProjectService extends BaseService<Project> {
  constructor(
    @InjectRepository(Project)
    private readonly engineRepository: Repository<Project>,
  ) {
    super(engineRepository)

    this.modelClass = Project
  }

  async projectFindMe(user: any) {

    const queryBuilder = this.engineRepository.createQueryBuilder("p")

    const isCompanyAdmin = user.roles.some(r => r === RoleEnum.CompanyAdmin)

    // queryBuilder.addSelect("p.id, p.company_id p.name, p.city_id, p.latitude, p.longitude")

    if (isCompanyAdmin) {
      queryBuilder
        .where("p.company_id = :ucompanyId", {
          ucompanyId: user.companyId,
        })
    } else {
      queryBuilder
      .innerJoin(UserProjectAccess, "upa", "upa.project_id = p.id")
      .where("upa.user_id = :uId", {
        uId: user.id
      })
    }

    return await queryBuilder.getMany()
  }
}
