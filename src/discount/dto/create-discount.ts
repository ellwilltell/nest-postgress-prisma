import { ApiProperty } from '@nestjs/swagger';
import { DiscountType } from '@prisma/client';

export class CreateDiscount {
  @ApiProperty({ type: String, enum: DiscountType })
  type: DiscountType;
  @ApiProperty({ type: Number })
  value: number;
}
