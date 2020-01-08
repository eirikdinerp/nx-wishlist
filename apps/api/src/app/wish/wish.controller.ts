import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { WishService } from './wish.service';
import { Wish } from '@wishlist/data';

@Controller('wish')
export class WishController {
  constructor(private readonly service: WishService) {}

  @Get('all/:wishlistId')
  // can use @Query instead of @Param if we have query parameters
  getAll(@Param() params) {
    if (!params.wishlistId) {
      return this.service.getAll();
    } else {
      return this.service.getAll(+params.wishlistId);
    }
  }

  // @Post('add')
  // add() {
  //     return this.service.add();
  // }

  // @Post('delete')
  // remove(@Body() id: number) {
  //     return this.service.remove(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updatedWish: Wish) {
  //     return this.service.update(updatedWish);
  // }
}
