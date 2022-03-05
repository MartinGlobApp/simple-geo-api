import { Module } from "@nestjs/common"

import { HomeController } from "./external.controller"
import { CryptoService } from "src/core/crypto.service";

@Module({
  controllers: [
    HomeController,
  ],
  imports: [
  ],
  providers: [CryptoService],
})
export class ExternalAPIModule {}
