export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface Product {
  id: number;
  img: string;
  title: string;
  description: string;
  price: number;
  code: number;
  qty: number;
  isNew: boolean;
  isBestSeller: boolean;
  onSale: boolean;
  clearance: boolean;
  createdAt?: Date;
  updatedAt?: Date;
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
