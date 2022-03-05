import { Logger } from "@nestjs/common"
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets"

import { Server } from "ws"

@WebSocketGateway(5001)
export class EventsGateway {

  private logger: Logger = new Logger(EventsGateway.name)

  @WebSocketServer() wss: Server

  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string) {
    for (const client of this.wss.clients.values()) {
      client.send(JSON.stringify({ event: "events", data: data }))
    }
  }

  afterInit() {
    this.logger.log("INIT - WS Events")
  }
}
