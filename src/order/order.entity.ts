import { Entity } from '@app/core';
import { PaymentMethod, OrderStatus } from '@app/shared-types';
import { Address, Order } from '@app/shared-types/order.interface';

export class OrderEntity implements Entity<Order>, Order {
  id?: number;
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

  constructor(order: Order) {
    this.fillEntity(order);
  }

  public toObject(): Order {
    throw new Error('Method not implemented.');
  }

  public fillEntity(entity: Order): void {
    this.id = entity.id;
    this.paymentMethod = entity.paymentMethod;
    this.email = entity.email;
    this.phone = entity.phone;
    this.products = entity.products.map((id) => id);
    this.amount = entity.amount;
    this.finalPrice = entity.finalPrice;
    this.userId = entity.userId;
    this.status = entity.status;
    this.shippingAddress = { ...entity.shippingAddress };
    this.notes = entity.notes;
  }
}
