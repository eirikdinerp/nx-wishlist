import { Injectable } from '@nestjs/common';
import { Wish } from '@wishlist/data';

@Injectable()
export class WishService {
  // todo generate UUID for ids
  private wishes: Wish[] = [
    { wishlistId: 1, id: 11, description: 'New car' },
    { wishlistId: 1, id: 12, description: 'Travel voucher' },
    { wishlistId: 1, id: 13, description: 'Sweater' },
    { wishlistId: 1, id: 14, description: 'Bicycle' },
    { wishlistId: 2, id: 21, description: 'Christmas sweater' },
    { wishlistId: 2, id: 22, description: 'Books' },
    { wishlistId: 2, id: 23, description: 'Shoes' },
    { wishlistId: 2, id: 24, description: 'Snow' },
    { wishlistId: 2, id: 25, description: "Cross country ski's" }
  ];

  getAll(wishlistId?: number) {
    if (!wishlistId) {
      return this.wishes;
    } else {
      return this.wishes.filter(w => w.wishlistId === wishlistId);
    }
  }

  getOne(wishlistId: number, wishId: number) {}

  // todo generate id and check that it belongs to list - can you have wishes not connected to list? NO should have a default list always
  create(wish: Wish) {
    this.wishes.push(wish);
  }
  remove(wishlistId: number, wishId: number) {
    const indexToRemove = this.wishes.findIndex(
      wish => wish.wishlistId === wishlistId && wish.id === wishId
    );
    if (indexToRemove) {
      this.wishes.splice(indexToRemove);
    }
  }
  update(wish: Wish) {}

  private generateId(): number {
    return Math.floor(Math.random() * 1000);
  }
}
