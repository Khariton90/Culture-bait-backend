import { OrderStatus } from './orderStatus.enum';
import { PaymentMethod } from './paymentMethod.enum';

export interface Address {
  city: string;
  street: string;
  entrance: string;
  apartment: string;
  floor: string;
}

export interface Order {
  paymentMethod: PaymentMethod;
  email: string;
  phone: string;
  products: number[];
  amount: number;
  finalPrice: number;
  userId: number;
  status: OrderStatus;
  shippingAddress: Address;
  notes: string;
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}
