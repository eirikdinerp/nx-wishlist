import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export enum WishlistOccasion {
  Wedding = 'WEDDING',
  Birthday = 'BIRTHDAY',
  Other = 'OTHER'
}
export interface Wishlist {
  _id?: string;
  ownerId?: string;
  title?: string;
  occasion?: WishlistOccasion;
  description?: string;
  isActive?: boolean;
  secret?: string;
}

export const WishlistSchema = new mongoose.Schema({
  title: String,
  description: String,
  ownerId: String,
  occasion: String,
  isActive: Boolean,
  secret: String
});

export interface WishlistDocument extends Document {
  ownerId?: string;
  title?: string;
  occasion?: WishlistOccasion;
  description?: string;
  isActive?: boolean;
  secret?: string;
}

export interface Wish {
  _id?: string;
  wishlistId?: string;
  title?: string;
  link?: string;
}

export const WishSchema = new mongoose.Schema({
  wishlistId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Wishlist'
  },
  title: String,
  link: String
});

export interface WishDocument extends Document {
  wishlistId?: string;
  title?: string;
  link?: string;
}

export interface User {
  _id?: number;
  name: string;
}
