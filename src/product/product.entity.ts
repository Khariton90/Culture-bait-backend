import { Entity } from '@app/core';
import { Product } from '@app/shared-types/product.interface';

export class ProductEntity implements Entity<Product>, Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public categoryId: number;
  public isNew: boolean;
  public isBestSeller: boolean;
  public onSale: boolean;
  public clearance: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  public img: string;
  public code: number;
  public qty: number;

  constructor(product: Product) {
    this.fillEntity(product);
  }

  public toObject(): Product {
    return { ...this };
  }

  public fillEntity(entity: Product): void {
    for (const key in entity) {
      this[key] = entity[key];
    }
  }
}
