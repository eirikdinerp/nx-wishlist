import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { Wishlist, CreateWishlistDto } from '@wishlist/data';
import { WishlistService } from './wishlist.service';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Get('all')
  async findAll(): Promise<Wishlist[]> {
    return this.wishlistService.findAll();
  }

  @Post('create')
  async create(@Body() createWishlistDto: CreateWishlistDto) {
    await this.wishlistService.create(createWishlistDto);
  }

  // @Post('remove')
  // remove(@Body() id: number) {
  //   return this.wishlistService.remove(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: number, @Body() updatedList: Wishlist) {
  //   return this.wishlistService.update(updatedList);
  // }
}
