import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { DiscountModule } from './discount/discount.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    ProductModule,
    CategoryModule,
    DiscountModule,
    UserModule,
    InvoiceModule,
  ],
  providers: [AppService],
})
export class AppModule {}
