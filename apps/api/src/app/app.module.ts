import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishlistController } from './wishlist/wishlist.controller';
import { WishlistService } from './wishlist/wishlist.service';
import { WishController } from './wish/wish.controller';
import { WishService } from './wish/wish.service';

@Module({
  imports: [],
  controllers: [AppController, WishlistController, WishController],
  providers: [AppService, WishlistService, WishService]
})
export class AppModule {}
