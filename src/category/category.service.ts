import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategory } from './dto/create-category';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async createCategory(category: CreateCategory): Promise<Category> {
    return this.prismaService.category.create({
      data: {
        title: category.title,
        slug: category.slug,
        parentId: category.parentId || null,
        discountRefId: category.discountId || null,
        description: category.description,
      },
    });
  }

  async getCategories(): Promise<Category[]> {
    return this.prismaService.category.findMany({});
  }

  async deleteById(id: string): Promise<Category> {
    return this.prismaService.category.delete({ where: { id: Number(id) } });
  }

  async findById(categoryId: number): Promise<Category> {
    return this.prismaService.category.findUnique({
      where: { id: categoryId },
    });
  }

  async findParentCategoryWithDiscount(categoryId: number): Promise<Category> {
    const result = await this.prismaService.$queryRaw`WITH RECURSIVE cat AS (
      SELECT  id,title,slug,description,"parentId","discountRefId"
      FROM "Category"
      WHERE id = ${categoryId}
      UNION ALL
      SELECT e.id,e.title,e.slug,e.description,e."parentId",e."discountRefId"
      FROM "Category" e
      INNER JOIN cat s ON s."parentId" = e.id )
      SELECT * from cat where cat."discountRefId" IS NOT NULL`;
    return result?.[0];
  }
}
