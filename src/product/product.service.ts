import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProduct } from './dto/create-product';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createProducts: CreateProduct): Promise<Product> {
    return this.prismaService.product.create({
      data: {
        title: createProducts.title,
        content: createProducts.content,
        categoryId: createProducts.categoryId || null,
        price: createProducts.price,
        discountRefId: createProducts.discountId || null,
      },
    });
  }

  async products(): Promise<Product[]> {
    return this.prismaService.product.findMany();
  }

  async deleteById(id: string): Promise<Product> {
    return this.prismaService.product.delete({ where: { id: Number(id) } });
  }

  findById(productId: string) {
    return this.prismaService.product.findUnique({
      where: { id: Number(productId) },
    });
  }
}
