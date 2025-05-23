
import { Injectable,ConflictException,UnauthorizedException  } from '@nestjs/common';
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
    // ✅ ตรวจว่ามี username หรือ email ซ้ำในระบบ
    const existing = await this.userRepo.findOne({
      where: [
        { username: data.username },
        { email: data.email }
      ],
    });

    if (existing) {
      throw new ConflictException('ชื่อผู้ใช้หรืออีเมลถูกใช้แล้ว');
    }

    const hashed = await bcrypt.hash(data.password, 10);
    const user = this.userRepo.create({ ...data, password: hashed });
    return this.userRepo.save(user);
  }
  async login(data: any) {
    const user = await this.userRepo.findOne({
      where: { username: data.username },
      relations: ['role'],
    });
  
    if (!user || !(await bcrypt.compare(data.password, user.password))) {
      throw new UnauthorizedException('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  
    const payload = {
      sub: user.id,
      username: user.username,
      role: user.role?.name,
    };
  
    return {
      message: 'เข้าสู่ระบบสำเร็จ',
      token: this.jwtService.sign(payload), // ✅ ให้ตรงกับ frontend
      user: {
        id: user.id,
        username: user.username,
        role: user.role?.name,
      },
    };
  }
  
}