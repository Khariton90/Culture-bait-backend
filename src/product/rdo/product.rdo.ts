import { Expose } from 'class-transformer';

export class ProductRdo {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public description: string;

  @Expose()
  public price: number;

  @Expose()
  public stock: number;

  @Expose()
  public categoryId: number;
}
