import { CRUDRepository } from '@app/core';
import { Injectable } from '@nestjs/common';
import { CategoryEntity } from './category.entity';
import { Category } from '@app/shared-types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoryRepository
  implements CRUDRepository<CategoryEntity, number, Category>
{
  constructor(private readonly prisma: PrismaService) {}

  public async findById(id: number): Promise<Category> {
    return this.prisma.category.findFirst({
      where: {
        id,
      },
      include: {
        products: true,
      },
    });
  }

  public async create(item: CategoryEntity): Promise<Category> {
    const entityData = item.toObject();

    return this.prisma.category.create({
      data: {
        ...entityData,
        products: {
          connect: [],
        },
      },
      include: {
        products: true,
      },
    });
  }
  public async update(id: number, item: CategoryEntity): Promise<Category> {
    const entityData = item.toObject();

    return this.prisma.category.update({
      where: {
        id,
      },
      data: {
        ...entityData,
        id,
        products: {
          connect: [...entityData.products],
        },
      },
      include: {
        products: true,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
}
