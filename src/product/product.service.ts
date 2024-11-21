import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { ProductIdsDto } from './dto/productIds.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async find() {
    const products = await this.productRepository.find();
    return products;
  }

  public async findManyByIds(dto: ProductIdsDto) {
    const products = await this.productRepository.findManyByIds(dto);
    return products;
  }

  public async findById(id: number) {
    return this.productRepository.findById(id);
  }
}
