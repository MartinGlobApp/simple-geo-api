import { Controller, Get, Res, Param } from '@nestjs/common';
import * as path from 'path';

@Controller()
export class HomeController {
  @Get('/')
  async index() {
    return {
      msg: 'Welcome to Woovix',
    };
  }

  @Get('/uploads/:file')
  getFileResult(@Param('file') file: string, @Res() res) {
    const pathFile: string = path.resolve(process.cwd(), 'uploads');

    return res.sendFile(file, {
      root: pathFile,
    });
  }
}
