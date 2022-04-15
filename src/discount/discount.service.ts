import { Injectable } from '@nestjs/common';
import { Discount } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDiscount } from './dto/create-discount';

@Injectable()
export class DiscountService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDiscount(discount: CreateDiscount): Promise<Discount> {
    return this.prismaService.discount.create({
      data: { value: BigInt(discount.value), type: discount.type },
    });
  }

  async getDiscounts(): Promise<Discount[]> {
    return this.prismaService.discount.findMany({});
  }

  async findById(discountRefId: number): Promise<Discount> {
    return this.prismaService.discount.findUnique({
      where: { id: discountRefId },
    });
  }

  async deleteById(id: string): Promise<Discount> {
    return this.prismaService.discount.delete({ where: { id: Number(id) } });
  }
}
