import { ApiProperty } from '@nestjs/swagger';

export class CreateCategory {
  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String, required: false })
  description?: string;

  @ApiProperty({ type: Number, required: false })
  parentId?: number;

  @ApiProperty({ type: Number, required: false })
  discountId?: number;
}
