import { ApiProperty } from '@nestjs/swagger';
export class CreateWishDto {
  @ApiProperty()
  readonly title: string;
}
