import { CRUDRepository } from '@app/core';
import { OrderEntity } from './order.entity';
import { Order } from '@app/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderRepository
  implements CRUDRepository<OrderEntity, number, Order>
{
  constructor(private readonly prisma: PrismaService) {}

  public async findById(id: number): Promise<Order> {
    throw new Error('Method not implemented.');
  }

  public async create(item: OrderEntity): Promise<Order> {
    throw new Error('Method not implemented.');
  }

  public async update(id: number, item: OrderEntity): Promise<Order> {
    throw new Error('Method not implemented.');
  }

  public async destroy(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
