import { Controller, Get, Post, Put, Param, Body, Query } from '@nestjs/common';
import { WishService } from './wish.service';
import { Wish, CreateWishDto } from '@wishlist/data';

@Controller('wish')
export class WishController {
  constructor(private readonly service: WishService) {}

  @Get('all/:wishlistId')
  async findAll(@Param() params): Promise<Wish[]> {
    return this.service.findAll(params.wishlistId);
  }

  @Post('create')
  async create(@Body() createWishDto: CreateWishDto) {
    await this.service.create(createWishDto);
  }
}
