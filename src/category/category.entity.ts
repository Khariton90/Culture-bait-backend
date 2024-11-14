import { Category } from '@app/shared-types';
import { Entity } from '@app/core/entity.interface';
import { Product } from '@app/shared-types/product.interface';

export class CategoryEntity implements Entity<CategoryEntity>, Category {
  id: number;
  title: string;
  products: Product[];

  constructor(category: Category) {
    this.fillEntity(category);
  }

  public toObject(): CategoryEntity {
    return { ...this, products: this.products.map(({ id }) => ({ id })) };
  }

  public fillEntity(entity: Category): void {
    this.id = entity.id;
    this.title = entity.title;
    this.products = [...entity.products];
  }
}
