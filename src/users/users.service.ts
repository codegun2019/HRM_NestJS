import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'; // 🔁 ปรับ path ตามที่คุณใช้

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  // ✅ ดึงข้อมูลผู้ใช้ทั้งหมด พร้อม role
  async findAll() {
    return this.userRepo.find({ relations: ['role'] });
  }

  // ✅ ดึงข้อมูลผู้ใช้ตาม id พร้อม role
  async findOne(id: number) {
    return this.userRepo.findOne({
      where: { id },
      relations: ['role'],
    });
  }

  // ✅ ดึงตาม username (ใช้ใน AuthService)
  async findByUsername(username: string) {
    return this.userRepo.findOne({
      where: { username },
      relations: ['role'],
    });
  }
}
