import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductIdsDto } from './dto/productIds.dto';
import { ProductQuery } from './query/product.query';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async find(query: ProductQuery) {
    const products = await this.productRepository.find(query);
    return products;
  }

  public async findManyByIds(dto: ProductIdsDto, query: ProductQuery) {
    const products = await this.productRepository.findManyByIds(dto, query);
    return products;
  }

  public async findById(id: number) {
    return this.productRepository.findById(id);
  }
}
