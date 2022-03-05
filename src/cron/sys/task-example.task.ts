import { Injectable, Logger } from "@nestjs/common"
import { Cron } from "@nestjs/schedule"

@Injectable()
export class TaskExampleService {
  private readonly logger = new Logger(TaskExampleService.name)

  @Cron("*/45 * * * * *")
  handleCron() {
    this.logger.debug("Called when the every 45 seconds")
  }
}
