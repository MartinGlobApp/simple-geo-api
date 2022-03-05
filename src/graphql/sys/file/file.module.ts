import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { FileService } from "./file.service"
import { FileResolver } from "./file.resolver"

import { File } from "./entities/file.entity"

@Module({
  imports: [
    TypeOrmModule.forFeature([File]),
],
  providers: [FileResolver, FileService],
  exports: [FileResolver, FileService],
})
export class FileModule {}
