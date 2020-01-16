import { take } from 'rxjs/operators';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientProxy } from '@nestjs/microservices';

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
    @InjectModel('Wish') private readonly wishModel: Model<WishDocument>,
    @Inject('EMAIL_SERVICE') private readonly clientEmailService: ClientProxy
  ) {}

  async create(createWishlistDto: CreateWishlistDto): Promise<Wishlist> {
    const createdWishlist = new this.wishlistModel(createWishlistDto);
    return await createdWishlist.save();
  }

  async findAll(userId?: string): Promise<Wishlist[]> {
    this.clientEmailService
      .send<string>({ cmd: 'ping' }, {})
      .pipe(take(1))
      .subscribe(val => console.log('From email service: ', val));

    if (!userId) {
      return await this.wishlistModel.find().exec();
    }
    return await this.wishlistModel.find({ ownerId: userId }).exec();
  }

  async findOne(id: string): Promise<Wishlist> {
    return await this.wishlistModel.findById(id).exec();
  }

  async findOneBasedOnSecret(secret: string): Promise<Wishlist> {
    return await this.wishlistModel.findOne({ secret: secret }).exec();
  }

  async remove(id: string): Promise<Wishlist> {
    const removeWishes = () => this.wishModel.deleteMany({ wishlistId: id });
    const removeWishlist = () =>
      this.wishlistModel.findOneAndDelete({ _id: `${id}` });

    return Promise.all([await removeWishes(), await removeWishlist()])[1];
  }

  async update(
    id: string,
    updateWishlistDto: CreateWishlistDto
  ): Promise<Wishlist> {
    return this.wishlistModel.updateOne({ _id: id }, updateWishlistDto);
  }
}
