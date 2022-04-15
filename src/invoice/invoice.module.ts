import { Module } from '@nestjs/common';
import { CategoryModule } from './../category/category.module';
import { DiscountModule } from './../discount/discount.module';
import { PrismaModule } from './../prisma/prisma.module';
import { ProductModule } from './../product/product.module';
import { InvoiceController } from './invoice.controller';
import { InvoiceService } from './invoice.service';

@Module({
  imports: [PrismaModule, DiscountModule, CategoryModule, ProductModule],
  providers: [InvoiceService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
