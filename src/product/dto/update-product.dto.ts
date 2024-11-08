import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  public id: number;

  @IsString()
  public name?: string;

  @IsString()
  public description?: string;

  @IsNumber()
  public price?: number;

  @IsNumber()
  public stock?: number;

  @IsNumber()
  public categoryId?: number;
}
