import { Injectable } from '@nestjs/common';
import { Wish } from '@wishlist/data';

@Injectable()
export class WishesService {
    private wishes: Wish[] = [{ id: this.generateId(), wishlistId: 1, description: 'Wish 1' }, { id: this.generateId(), wishlistId: 2, description: 'Wish 2' }];

    getAll(): Wish[] {
        return this.wishes;

    }

    add() {
        const id = this.generateId();
        this.wishes.push({
            id: id,
            description: `New Wish ${id}`
        });
    }

    update(updated: Wish) {

    }

    remove(id: number) {
        const indexToRemove = this.wishes.findIndex(wish => wish.id === id);
        if (indexToRemove) {
            this.wishes.splice(indexToRemove);
        }

    }


    private generateId(): number {
        return Math.floor(Math.random() * 1000);
    }
}
