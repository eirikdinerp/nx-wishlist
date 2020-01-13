import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { WishlistModule } from './wishlist/wishlist.module';
import { AuthzModule } from './authz/authz.module';
import { WishlistController } from './wishlist/wishlist.controller';

export function logger(req: Request, res, next) {
  console.log(`Request...`);
  console.dir(req.headers);
  next();
}

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
    AuthzModule,
    WishlistModule
  ],
  controllers: [],
  providers: [ConfigService]
})
export class AppModule {}

// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(WishlistController);
//   }
// }
