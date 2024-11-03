import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { fillObject } from '@app/core';
import { CategoryRdo } from './rdo/category.rdo';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('/:id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The category was obtained',
    type: CategoryRdo,
  })
  public async show(@Param('id') id: number): Promise<CategoryRdo> {
    const category = this.categoryService.findById(id);
    return fillObject(CategoryRdo, category);
  }
}
