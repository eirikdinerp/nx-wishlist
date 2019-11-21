import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('wishes')
  getData() {
    return this.appService.getData();
  }

  @Post('addWish')
  addWish() {
    return this.appService.addWish();
  }
}
