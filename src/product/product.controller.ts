import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProduct } from './dto/create-product';
import { ProductService } from './product.service';

@ApiTags('Product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProduct: CreateProduct) {
    return this.productService.create(createProduct);
  }

  @Get()
  products() {
    return this.productService.products();
  }

  @Delete(':id')
  deleteBuId(@Param('id') id: string) {
    return this.productService.deleteById(id);
  }
}
