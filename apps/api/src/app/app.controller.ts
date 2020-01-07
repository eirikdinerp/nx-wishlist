import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';

import { AppService } from './app.service';
import { Wish } from '@wishlist/data';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


}
