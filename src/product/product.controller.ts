import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { fillObject } from '@app/core';
import { ProductRdo } from './rdo/product.rdo';
import { Express } from 'express';
import { CreateFileDto } from './dto/create-file.dto';
import { UseFileInterceptor } from './interceptors/useFIle.interceptor';
import { ProductIdsDto } from './dto/productIds.dto';
import { ProductQuery } from './query/product.query';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  public async show(@Query() query: ProductQuery) {
    return fillObject(ProductRdo, this.productService.find(query));
  }

  @Post('/cart')
  public async findByIds(
    @Body() dto: ProductIdsDto,
    @Query() query: ProductQuery,
  ) {
    return fillObject(
      ProductRdo,
      this.productService.findManyByIds(dto, query),
    );
  }

  @Get('/:id')
  public async findById(@Param('id') id: number) {
    return fillObject(ProductRdo, this.productService.findById(+id));
  }

  @Post('upload')
  @UseInterceptors(UseFileInterceptor())
  public async upload(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateFileDto,
  ) {
    return {
      filename: file.filename,
      size: file.size,
      dto,
    };
  }
}
