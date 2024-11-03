import { CRUDRepository } from '@app/core';
import { UserEntity } from './user.entity';
import { User } from '@app/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository
  implements CRUDRepository<UserEntity, number, User>
{
  constructor(private readonly prisma: PrismaService) {}

  public async findById(id: number): Promise<User> {
    return this.prisma.user.findFirst({
      where: { id },
    });
  }

  public async create(item: UserEntity): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...item.toObject(),
      },
    });
  }

  public async update(id: number, item: UserEntity): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        ...item.toObject(),
        id,
      },
    });
  }

  public async destroy(id: number): Promise<void> {
    this.prisma.user.delete({
      where: { id },
    });
  }
}
