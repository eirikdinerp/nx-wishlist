import { Injectable } from '@nestjs/common';
import { Wish } from '@wishlist/data';

@Injectable()
export class AppService {
  wishes: Wish[] = [{ description: 'Wish 1' }, { description: 'Wish 2' }];

  getData(): Wish[] {
    return this.wishes;
  }

  addWish() {
    this.wishes.push({
      description: `New Wish ${Math.floor(Math.random() * 1000)}`
    });
  }
}
