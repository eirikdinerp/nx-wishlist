import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { WishlistModule } from './wishlist/wishlist.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGO_DB_URI')
      }),
      inject: [ConfigService]
    }),
    WishlistModule
  ],
  controllers: [],
  providers: [ConfigService]
})
export class AppModule {}
