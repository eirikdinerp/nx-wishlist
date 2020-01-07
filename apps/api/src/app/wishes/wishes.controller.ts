import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { WishesService } from './wishes.service';
import { Wish } from '@wishlist/data';

@Controller('wishes')
export class WishesController {

    constructor(private readonly wishesService: WishesService) { }

    @Get('all')
    getAll() {
        return this.wishesService.getAll();
    }

    @Post('add')
    add() {
        return this.wishesService.add();
    }

    @Post('delete')
    remove(@Body() id: number) {
        return this.wishesService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatedWish: Wish) {
        return this.wishesService.update(updatedWish);
    }
}
