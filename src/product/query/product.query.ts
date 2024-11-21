import { IsEnum, IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_PRODUCT_LIMIT } from '../product.constants';
import { SortDirection } from '@app/shared-types';

export class ProductQuery {
  @Transform(({ value }) => Number(value) || DEFAULT_PRODUCT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_PRODUCT_LIMIT;

  @IsEnum(SortDirection)
  @IsOptional()
  public sortDirection: SortDirection = SortDirection.Desc;

  @Transform(({ value }) => Number(value))
  @IsOptional()
  public page: number;

  @IsIn(['reviews', 'popularity', 'price', 'rating'])
  @IsOptional()
  public sortBy: 'reviews' | 'popularity' | 'price' | 'rating' = 'popularity';
}
