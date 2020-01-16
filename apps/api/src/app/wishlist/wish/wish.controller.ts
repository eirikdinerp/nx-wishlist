import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { Wish, CreateWishDto } from '@wishlist/data';

import { WishService } from './wish.service';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiTags('wishes')
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
