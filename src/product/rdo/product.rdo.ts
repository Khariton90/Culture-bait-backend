import { Expose } from 'class-transformer';

export class ProductRdo {
  @Expose()
  public id: number;

  @Expose()
  public img: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public price: number;

  @Expose()
  public code: number;

  @Expose()
  public qty: number;

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
}
