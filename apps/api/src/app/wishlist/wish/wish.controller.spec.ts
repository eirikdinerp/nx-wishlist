import { Test, TestingModule } from '@nestjs/testing';
import { WishController } from './wish.controller';
import { WishService } from './wish.service';
import { WishDocument } from '@wishlist/data';
import { getModelToken } from '@nestjs/mongoose';

describe('Wish Controller', () => {
  let controller: WishController;

  const wishModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishController],
      providers: [
        WishService,
        {
          provide: getModelToken('Wish'),
          useValue: wishModel
        }
      ]
    }).compile();

    controller = module.get<WishController>(WishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
