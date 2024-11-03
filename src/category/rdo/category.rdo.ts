import { Product } from '@app/shared-types/product.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class CategoryRdo {
  @Expose()
  @ApiProperty({
    type: Number,
    description: 'Uniq comment ID',
    example: 1,
  })
  id: number;

  @Expose()
  @ApiProperty({
    type: String,
    description: 'Category name',
    example: 'Удилища',
  })
  name: string;

  @Expose()
  @ApiProperty({
    type: Array,
    description: 'Products corresponding to this category',
    example: [
      {
        id: 1,
        name: 'Akara',
        description: 'Описание Уд. тел. уг. д/с Akara Float Bolo (15-35) 5,0 м',
        price: 3080,
        stock: 10,
        categoryId: 1,
      },
    ],
  })
  products: Product[];
}
