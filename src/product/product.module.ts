import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { MulterModule } from '@nestjs/platform-express';
import { FILE_UPLOAD_DIR } from './product.constants';

@Module({
  imports: [
    MulterModule.register({
      dest: FILE_UPLOAD_DIR,
      limits: {
        fieldSize: 1000 * 1000 * 10,
      },
    }),
  ],
  providers: [ProductService, ProductRepository],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
