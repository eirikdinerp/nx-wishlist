import { ApiProperty } from '@nestjs/swagger';
export class CreateWishlistDto {
  @ApiProperty()
  readonly title: string;
  @ApiProperty()
  readonly description: string;
  @ApiProperty()
  readonly occasion: string;
  ownerId: string;
}
