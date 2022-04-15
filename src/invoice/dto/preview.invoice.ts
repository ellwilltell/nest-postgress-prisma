import { ApiProperty } from '@nestjs/swagger';

export class PreviewInvoice {
  @ApiProperty({ type: Number })
  userId: string;
  @ApiProperty({ type: Number })
  productId: string;
}
