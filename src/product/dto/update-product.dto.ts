import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsNumber()
  public id: number;

  @IsOptional()
  @IsString()
  public name?: string;

  @IsOptional()
  @IsString()
  public description?: string;

  @IsOptional()
  @IsNumber()
  public price?: number;

  @IsOptional()
  @IsNumber()
  public stock?: number;

  @IsOptional()
  @IsNumber()
  public categoryId?: number;

  @IsOptional()
  @IsBoolean()
  public isNew?: boolean;

  @IsBoolean()
  public isBestSeller?: boolean;

  @IsOptional()
  @IsBoolean()
  public onSale?: boolean;

  @IsOptional()
  @IsBoolean()
  public clearance?: boolean;
}
