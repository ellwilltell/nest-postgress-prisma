import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategory } from './dto/create-category';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() createCategory: CreateCategory) {
    return this.categoryService.createCategory(createCategory);
  }

  @Get()
  categories() {
    return this.categoryService.getCategories();
  }

  @Delete(':id')
  deleteBuId(@Param('id') id: string) {
    return this.categoryService.deleteById(id);
  }
}
