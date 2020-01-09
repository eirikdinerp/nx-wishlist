import { Injectable } from '@nestjs/common';
import { Wish, WishDocument, CreateWishDto } from '@wishlist/data';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class WishService {
  constructor(
    @InjectModel('Wish') private readonly wishModel: Model<WishDocument>
  ) {}

  async create(createWishDto: CreateWishDto): Promise<Wish> {
    const createdWish = new this.wishModel(createWishDto);
    return await createdWish.save();
  }

  async findAll(wishListId: string): Promise<Wish[]> {
    return await this.wishModel.find({ wishlistId: wishListId }).exec();
  }
}