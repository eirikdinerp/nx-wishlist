import { Test, TestingModule } from '@nestjs/testing';
import { WishlistService } from './wishlist.service';
import { getModelToken } from '@nestjs/mongoose';

describe('WishlistService', () => {
  let service: WishlistService;

  const wishlistModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WishlistService,
        {
          provide: getModelToken('Wishlist'),
          useValue: wishlistModel
        }
      ]
    }).compile();

    service = module.get<WishlistService>(WishlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
