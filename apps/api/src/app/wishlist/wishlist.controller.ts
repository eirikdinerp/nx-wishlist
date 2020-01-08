import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { WishList } from '@wishlist/data';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {

    constructor(private readonly wishlistService: WishlistService) {

    }

    @Get('all')
    getAll() {
        return this.wishlistService.getAll();
    }

    @Post('add')
    add() {
        return this.wishlistService.add();
    }

    @Post('delete')
    remove(@Body() id: number) {
        return this.wishlistService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedList: WishList) {
        return this.wishlistService.update(updatedList);
    }
}
