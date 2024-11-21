import { IsArray } from 'class-validator';

export class ProductIdsDto {
  @IsArray()
  productIds: number[];
}
