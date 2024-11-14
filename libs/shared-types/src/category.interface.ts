import { Product } from './product.interface';

export interface Category {
  id?: number;
  title: string;
  products: Product[];
}
