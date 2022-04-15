import { ApiProperty } from '@nestjs/swagger';

export class CreateUser {
  @ApiProperty({ type: String })
  email: string;
}
