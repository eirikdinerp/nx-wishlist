import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WishesController } from './wishes/wishes.controller';

describe('AppController', () => {
  let controller: AppController;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    controller = app.get<AppController>(AppController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
