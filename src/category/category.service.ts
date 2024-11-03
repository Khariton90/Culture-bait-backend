import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async createCategory(dto: CreateCategoryDto) {
    const entity = new CategoryEntity({ name: dto.name, products: [] });
    return this.categoryRepository.create(entity);
  }

  public async findById(id: number) {
    return this.categoryRepository.findById(id);
  }
}
