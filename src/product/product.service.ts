import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public async find() {
    const products = await this.productRepository.find();
    console.log(products);
    return products;
  }

  public async findById(id: number) {
    return this.productRepository.findById(id);
  }
}
