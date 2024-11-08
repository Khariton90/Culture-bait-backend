import { Entity } from '@app/core';
import { Product } from '@app/shared-types/product.interface';

export class ProductEntity implements Entity<Product>, Product {
  public id: number;
  public name: string;
  public description: string;
  public price: number;
  public stock: number;
  public categoryId: number;

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
