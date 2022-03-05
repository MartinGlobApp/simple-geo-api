import { ValidationPipe } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { json, text, urlencoded } from "express"
import { AppModule } from "./app.module"
import { WsAdapter } from "./gateway/config/adapter.config"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useWebSocketAdapter(new WsAdapter(app))

  app.enableCors()
  app.use(json({ limit: "50mb" }))
  app.use(text({ limit: "50mb" }))

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  )
  app.use(urlencoded({ extended: true, limit: "50mb" }))

  await app.listen(5000)
}
bootstrap()
