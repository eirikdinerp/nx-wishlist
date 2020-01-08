import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishesController } from './wishes/wishes.controller';
import { WishesService } from './wishes/wishes.service';
import { WishlistController } from './wishlist/wishlist.controller';
import { WishlistService } from './wishlist/wishlist.service';

@Module({
  imports: [],
  controllers: [AppController, WishesController, WishlistController],
  providers: [AppService, WishesService, WishlistService],
})
export class AppModule { }
