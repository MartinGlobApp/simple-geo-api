import { Module } from "@nestjs/common"

import { CityModule } from "./city/city.module"
import { CountryModule } from "./country/country.module"
import { LogFormItemModule } from "./log-form-item/log-form-item.module"
import { LogTypeModule } from "./log-type/log-type.module"
import { StateModule } from "./state/state.module"
import { ValueModule } from "./value/value.module"
import { ValueTypeModule } from "./value-type/value-type.module"

@Module({
  imports: [CityModule, CountryModule, LogFormItemModule, LogTypeModule, StateModule, ValueModule, ValueTypeModule],
})
export class DataModule {}
