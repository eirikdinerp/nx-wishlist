export interface Wish {
  id?: number;
  description?: string;
  wishlistId?: number;
}

export interface WishList {
  id?: number;
  ownerId?: number;
  ownerName?: string;
  title?: string;
  occassion?: string;
  description?: string;
  wishes?: Wish[];
}

export interface User {
  id?: number;
  name: string;
}