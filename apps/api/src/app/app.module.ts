import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/dev'), WishlistModule],
  controllers: [],
  providers: []
})
export class AppModule {}
