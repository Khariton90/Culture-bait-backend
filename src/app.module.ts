import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CategoryModule, UserModule, ProductModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
