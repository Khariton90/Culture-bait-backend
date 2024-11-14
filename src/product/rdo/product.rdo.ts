import { Expose } from 'class-transformer';

export class ProductRdo {
  @Expose()
  public id: number;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public price: number;

  @Expose()
  public stock: number;

  @Expose()
  public categoryId: number;

  @Expose()
  public isNew: boolean;

  @Expose()
  public isBestSeller: boolean;

  @Expose()
  public onSale: boolean;

  @Expose()
  public clearance: boolean;

  @Expose()
  public images: [];
}
