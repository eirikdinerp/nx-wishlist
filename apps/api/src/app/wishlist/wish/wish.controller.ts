import { Controller, Get, Post, Param, Body, Delete } from '@nestjs/common';
import { WishService } from './wish.service';
import { Wish, CreateWishDto } from '@wishlist/data';

@Controller('wishlists/:id/wishes')
export class WishController {
  constructor(private readonly service: WishService) {}

  @Get()
  async findAll(@Param() params): Promise<Wish[]> {
    return this.service.findAll(params.id);
  }

  @Post()
  async create(@Body() createWishDto: CreateWishDto) {
    await this.service.create(createWishDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
