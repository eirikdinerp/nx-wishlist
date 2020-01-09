import { Test, TestingModule } from '@nestjs/testing';
import { WishService } from './wish.service';
import { getModelToken } from '@nestjs/mongoose';

describe('WishService', () => {
  let service: WishService;

  const wishModel = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WishService,
        {
          provide: getModelToken('Wish'),
          useValue: wishModel
        }
      ]
    }).compile();

    service = module.get<WishService>(WishService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
