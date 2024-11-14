import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ENV_FILE_PATH } from './app.constants';
import { AuthModule } from './auth/auth.module';
import envSchema from './env.schema';
import { ServeStaticModule } from '@nestjs/serve-static';
import { FILE_UPLOAD_DIR } from './product/product.constants';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      validationSchema: envSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: FILE_UPLOAD_DIR,
    }),
    CategoryModule,
    UserModule,
    ProductModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
