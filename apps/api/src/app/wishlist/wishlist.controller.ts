import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  Delete,
  UseGuards,
  Req
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
  async create(
    @Body() createWishlistDto: CreateWishlistDto,
    @Req() request: Request
  ) {
    const userId = request['user']['https://api.stonefree.com/email'];
    createWishlistDto.ownerId = userId;
    return await this.wishlistService.create(createWishlistDto);
  }

  @Get()
  async findAll(@Req() request: Request): Promise<Wishlist[]> {
    const userId = request['user']['https://api.stonefree.com/email'];
    return this.wishlistService.findAll(userId);
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
