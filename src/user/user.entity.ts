import { Entity } from '@app/core';
import { User, UserRole } from '@app/shared-types';

export class UserEntity implements Entity<UserEntity>, User {
  public firstName: string;
  public lastName: string;
  public phoneNumber: string;
  public passwordHash: string;
  public role: UserRole;
  public email?: string;
  public id?: number;

  public toObject(): UserEntity {
    return { ...this };
  }

  public fillEntity(entity: UserEntity): void {
    for (const item in entity) {
      this[item] = entity[item];
    }
  }
}
