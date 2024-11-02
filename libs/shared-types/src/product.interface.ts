export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: number;
}

export interface Characteristics {
  id: number;
  name: string;
}

export interface ProductImages {
  id: number;
  productId: number;
  imagePath: string;
}
