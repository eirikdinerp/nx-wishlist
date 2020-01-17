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
import { Wishlist } from '@wishlist/data';
import { CreateWishlistDto } from '../dtos/create-wishlist.dto';
import { WishlistService } from './wishlist.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';

@UseGuards(AuthGuard('jwt'))
@ApiTags('wishlists')
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

  @Get(':secret')
  async findActive(@Param('secret') secret: string): Promise<Wishlist> {
    return this.wishlistService.findOneBasedOnSecret(secret);
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
