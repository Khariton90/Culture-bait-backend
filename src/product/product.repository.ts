import { CRUDRepository, getByIdList, getOrderBy, getSkip } from '@app/core';
import { ProductEntity } from './product.entity';
import { Product } from '@app/shared-types/product.interface';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductIdsDto } from './dto/productIds.dto';
import { ProductQuery } from './query/product.query';

@Injectable()
export class ProductRepository
  implements CRUDRepository<ProductEntity, number, Product>
{
  constructor(private readonly prisma: PrismaService) {}

  public async find(query: ProductQuery): Promise<Product[]> {
    return this.prisma.product.findMany({
      take: query.limit,
      orderBy: getOrderBy(query),
      skip: getSkip(query.page, query.limit),
    });
  }

  public async findManyByIds(dto: ProductIdsDto, query: ProductQuery) {
    return this.prisma.product.findMany({
      where: {
        id: {
          in: getByIdList(dto.productIds),
        },
      },
      take: query.limit,
      orderBy: getOrderBy(query),
      skip: getSkip(query.page, query.limit),
    });
  }

  public async findById(id: number): Promise<Product> {
    return this.prisma.product.findFirst({
      where: { code: id },
    });
  }

  public async create(item: ProductEntity): Promise<Product> {
    const entityData = item.toObject();

    return this.prisma.product.create({
      data: {
        ...entityData,
      },
    });
  }

  public async update(id: number, item: ProductEntity): Promise<Product> {
    const entityData = item.toObject();
    return this.prisma.product.update({
      where: {
        id,
      },
      data: {
        ...entityData,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.product.delete({
      where: {
        id,
      },
    });
  }
}
