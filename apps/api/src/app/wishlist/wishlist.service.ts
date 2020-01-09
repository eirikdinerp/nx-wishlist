import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Wishlist, WishlistDocument, CreateWishlistDto } from '@wishlist/data';

@Injectable()
export class WishlistService {
  constructor(
    @InjectModel('Wishlist')
    private readonly wishlistModel: Model<WishlistDocument>
  ) {}

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const createdWishlist = new this.wishlistModel(createWishlistDto);
    return await createdWishlist.save();
  }

  async findAll(): Promise<Wishlist[]> {
    return await this.wishlistModel.find().exec();
  }
}
