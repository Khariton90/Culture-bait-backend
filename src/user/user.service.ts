import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser() {}

  public async findById(id: number) {
    return this.userRepository.findById(id);
  }

  public async updateUser() {}

  public async deleteUser() {}
}
