import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  UseGuards
} from '@nestjs/common';
import { Wishlist, CreateWishlistDto } from '@wishlist/data';
import { WishlistService } from './wishlist.service';
import { of } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('wishlists')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post()
  async create(@Body() createWishlistDto: CreateWishlistDto) {
    return await this.wishlistService.create(createWishlistDto);
  }

  @Get()
  async findAll(): Promise<Wishlist[]> {
    return this.wishlistService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.wishlistService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateWishlistDto: CreateWishlistDto
  ) {
    return this.wishlistService.update(id, updateWishlistDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.wishlistService.remove(id);
  }
}
