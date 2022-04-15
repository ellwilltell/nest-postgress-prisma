import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DiscountService } from './discount.service';
import { CreateDiscount } from './dto/create-discount';

@ApiTags('Discount')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  create(@Body() createDiscount: CreateDiscount) {
    return this.discountService.createDiscount(createDiscount);
  }

  @Get()
  categories() {
    return this.discountService.getDiscounts();
  }

  @Delete(':id')
  deleteBuId(@Param('id') id: string) {
    return this.discountService.deleteById(id);
  }
}
