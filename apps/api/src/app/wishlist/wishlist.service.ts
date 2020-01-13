import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Wishlist,
  WishlistDocument,
  CreateWishlistDto,
  WishDocument
} from '@wishlist/data';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel('Wishlist')
    private readonly wishlistModel: Model<WishlistDocument>,
    @InjectModel('Wish') private readonly wishModel: Model<WishDocument>
  ) {}

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const createdWishlist = new this.wishlistModel(createWishlistDto);
    return await createdWishlist.save();
  }

  async findAll(): Promise<Wishlist[]> {
    return await this.wishlistModel.find().exec();
  }

  async findOne(id: string): Promise<Wishlist> {
    return await this.wishlistModel.findById(id).exec();
  }

  async remove(id: string): Promise<Wishlist> {
    const removeWishes = () => this.wishModel.deleteMany({ wishlistId: id });
    const removeWishlist = () =>
      this.wishlistModel.findOneAndDelete({ _id: `${id}` });

    return Promise.all([await removeWishes(), await removeWishlist()])[1];
  }
}
