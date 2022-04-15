import { ApiProperty } from '@nestjs/swagger';

export class CreateProduct {
  @ApiProperty({ type: String })
  title: string;
  @ApiProperty({ type: String })
  content: string;
  @ApiProperty({ type: Number })
  categoryId: number;
  @ApiProperty({ type: Number })
  price: number;
  @ApiProperty({ type: Number, required: false })
  discountId: number;
}
