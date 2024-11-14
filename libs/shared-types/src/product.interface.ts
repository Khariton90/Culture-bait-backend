export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  categoryId: number;
  isNew: boolean;
  isBestSeller: boolean;
  onSale: boolean;
  clearance: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  images?: ProductImages[];
}

export interface Characteristics {
  id: number;
  name: string;
}

export interface ProductImages {
  id: number;
  productId: number;
  path: string;
}
