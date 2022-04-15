import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductService } from 'src/product/product.service';
import { CategoryService } from './../category/category.service';
import { DiscountService } from './../discount/discount.service';
import { PreviewInvoice } from './dto/preview.invoice';
import { ResponsePreviewInvoice } from './dto/response.preview.invoice';

@Injectable()
export class InvoiceService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly categoryService: CategoryService,
    private readonly discountService: DiscountService,
    private readonly productService: ProductService,
  ) {}

  async previewInvoice(previewInvoice: PreviewInvoice) {
    const product = await this.productService.findById(
      previewInvoice.productId,
    );

    let discountPercent = BigInt(0);

    if (product && product.discountRefId) {
      const discount = await this.discountService.findById(
        product.discountRefId,
      );
      if (discount && discount.isActive) {
        discountPercent = discount.value;
      }
    } else {
      const currentCategory = await this.categoryService.findById(
        product.categoryId,
      );
      if (currentCategory) {
        if (currentCategory.discountRefId) {
          const discount = await this.discountService.findById(
            currentCategory.discountRefId,
          );
          if (discount && discount.isActive) {
            discountPercent = discount.value;
          }
        } else {
          const grandCategory =
            await this.categoryService.findParentCategoryWithDiscount(
              currentCategory.id,
            );
          if (grandCategory && grandCategory.discountRefId) {
            const discount = await this.discountService.findById(
              grandCategory.discountRefId,
            );
            if (discount && discount.isActive) {
              discountPercent = discount.value;
            }
          }
        }
      }
    }
    const totalDiscount = BigInt(
      (product.price * discountPercent) / BigInt(100),
    );
    return {
      hasDiscount: discountPercent !== BigInt(0),
      price: product.price,
      totalDiscount,
      totalPriceAfterDiscount: product.price - totalDiscount,
    } as ResponsePreviewInvoice;
  }
}
