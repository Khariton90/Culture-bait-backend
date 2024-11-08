import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { fillObject } from '@app/core';
import { ProductRdo } from './rdo/product.rdo';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  public async show() {
    return fillObject(ProductRdo, this.productService.find());
  }

  @Get('/:id')
  public async findById(@Param('id') id: number) {
    return fillObject(ProductRdo, this.productService.findById(id));
  }
}
