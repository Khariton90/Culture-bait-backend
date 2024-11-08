import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  public find() {
    return this.productRepository.find();
  }

  public findById(id: number) {
    return this.productRepository.findById(id);
  }
}
