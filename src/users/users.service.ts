import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { Role } from '../entities/role.entity'
import { UpdateUserDto } from './dto/update-user.dto'
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}

  async findAll() {
    return this.userRepo.find({ relations: ['role'] })
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: ['role'],
    })
    if (!user) throw new NotFoundException(`User with id ${id} not found`)
    return user
  }

async create(dto: CreateUserDto): Promise<User> {
  // 1. แปลง "2" เป็น 2 ถ้าจำเป็น
  if (typeof dto.role_id === 'string' && /^\d+$/.test(dto.role_id)) {
    dto.role_id = parseInt(dto.role_id, 10);
  }

  // 2. ถ้าเป็นชื่อ role → หา id
  if (typeof dto.role_id === 'string') {
    const roleByName = await this.roleRepo.findOne({ where: { name: dto.role_id } });
    if (!roleByName) throw new NotFoundException(`Role "${dto.role_id}" not found`);
    dto.role_id = roleByName.id;
  }

  // 3. ดึง role object
  const role = await this.roleRepo.findOne({ where: { id: dto.role_id } });
  if (!role) throw new NotFoundException(`Role ID "${dto.role_id}" not found`);

  // 4. Hash password
  const hashedPassword = await bcrypt.hash(dto.password, 10);

  // 5. สร้าง user
  const user = this.userRepo.create({
    username: dto.username,
    email: dto.email,
    password: hashedPassword,
    role_id: dto.role_id,
    role,
  });

  return this.userRepo.save(user);
}


  async findByUsername(username: string) {
    return this.userRepo.findOne({
      where: { username },
      relations: ['role'],
    })
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.findOne(id)

    if (typeof dto.role_id === 'string' && /^\d+$/.test(dto.role_id)) {
      dto.role_id = parseInt(dto.role_id, 10)
    }

    if (typeof dto.role_id === 'string') {
      const roleByName = await this.roleRepo.findOne({
        where: { name: dto.role_id },
      })
      if (!roleByName) throw new NotFoundException(`Role "${dto.role_id}" not found`)
      dto.role_id = roleByName.id
    }

    if (dto.role_id !== undefined) {
      const role = await this.roleRepo.findOne({
        where: { id: dto.role_id },
      })
      if (!role) throw new NotFoundException(`Role ID "${dto.role_id}" not found`)

      user.role = role // ✅ ตอนนี้ type ตรง เพราะ user.role เป็น Partial<Role>
    }

    if (dto.password) {
      dto.password = await bcrypt.hash(dto.password, 10)
    }

    Object.assign(user, dto)

    return this.userRepo.save(user)
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id)
    await this.userRepo.remove(user)
  }
}
