
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { User } from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService
  ) {}

  async register(data: any) {
    const hashed = await bcrypt.hash(data.password, 10);
    const user = this.userRepo.create({ ...data, password: hashed });
    return this.userRepo.save(user);
  }

  async login(data: any) {
    const user = await this.userRepo.findOne({
      where: { username: data.username },
      relations: ['role'], // ✅ ต้องดึง role ด้วย
    });
  
    if (user && await bcrypt.compare(data.password, user.password)) {
      const payload = {
        sub: user.id,
        username: user.username,
        role: user.role?.name, // ✅ แนบ role ลงไปใน JWT
      };
      return { access_token: this.jwtService.sign(payload) };
    }
    return null;
  }
}
