import { IsNumber } from 'class-validator';

export class ProductDto {
  @IsNumber()
  public id: number;
}
