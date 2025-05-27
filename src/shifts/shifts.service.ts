// src/shifts/shifts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Shift } from './entities/shift.entity'
import { CreateShiftDto } from './dto/create-shift.dto'
import { UpdateShiftDto } from './dto/update-shift.dto'

@Injectable()
export class ShiftsService {
  constructor(
    @InjectRepository(Shift)
    private shiftRepo: Repository<Shift>
  ) {}

  create(dto: CreateShiftDto) {
    const shift = this.shiftRepo.create(dto)
    return this.shiftRepo.save(shift)
  }

  findAll() {
    return this.shiftRepo.find()
  }

  findOne(id: number) {
    return this.shiftRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateShiftDto) {
    const shift = await this.shiftRepo.findOneBy({ id })
    if (!shift) throw new NotFoundException('ไม่พบกะที่ต้องการแก้ไข')

    Object.assign(shift, dto)
    return this.shiftRepo.save(shift)
  }

  async remove(id: number) {
    const shift = await this.shiftRepo.findOneBy({ id })
    if (!shift) throw new NotFoundException('ไม่พบกะที่ต้องการลบ')

    return this.shiftRepo.remove(shift)
  }
}
