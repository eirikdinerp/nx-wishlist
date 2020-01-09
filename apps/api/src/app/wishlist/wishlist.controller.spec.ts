import { Test, TestingModule } from '@nestjs/testing';
import { WishlistController } from './wishlist.controller';
import { WishlistService } from './wishlist.service';
import { getModelToken } from '@nestjs/mongoose';

describe('Wishlist Controller', () => {
  let controller: WishlistController;

  const wishlistModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WishlistController],
      providers: [
        WishlistService,
        {
          provide: getModelToken('Wishlist'),
          useValue: wishlistModel
        }
      ]
    }).compile();

    controller = module.get<WishlistController>(WishlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
