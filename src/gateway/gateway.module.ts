import { Module } from "@nestjs/common"

import { EventsGateway } from "./messages/events/events.gateway"

@Module({
  providers: [
    EventsGateway
  ],
})
export class GatewayModule {}
