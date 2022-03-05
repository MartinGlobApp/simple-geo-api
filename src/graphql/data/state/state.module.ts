import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { StateService } from "./state.service"
import { StateResolver } from "./state.resolver"

import { State } from "./entities/state.entity"

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StateResolver, StateService],
  exports: [StateResolver, StateService],
})
export class StateModule {}
