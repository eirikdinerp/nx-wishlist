import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishesController } from './wishes/wishes.controller';
import { WishesService } from './wishes/wishes.service';

@Module({
  imports: [],
  controllers: [AppController, WishesController],
  providers: [AppService, WishesService],
})
export class AppModule { }
