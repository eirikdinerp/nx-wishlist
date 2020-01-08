import { Injectable } from '@nestjs/common';
import { WishList } from '@wishlist/data';

@Injectable()
export class WishlistService {

    private wishlists: WishList[] = [{ id: 1, title: 'Birthday' }, { id: 2, title: 'Christmas 2020' }];

    getAll(): WishList[] {
        return this.wishlists;
    }

    add() { }

    remove(id: number) { }

    update(list: WishList) { }
}
