import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find({ relations: ['role'] });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id }, relations: ['role'] });
  }

  findByUsername(username: string) {
    return this.userRepository.findOne({ where: { username }, relations: ['role'] });
  }

  create(data: Partial<User>) {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  async update(id: number, data: Partial<User>) {
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
    return { deleted: true };
  }
}
