// src/positions/positions.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Position } from './entities/position.entity'
import { CreatePositionDto } from './dto/create-position.dto'
import { UpdatePositionDto } from './dto/update-position.dto'
import { Department } from 'src/departments/entities/department.entity'

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private positionRepo: Repository<Position>,

    @InjectRepository(Department)
    private departmentRepo: Repository<Department>
  ) {}

  async create(dto: CreatePositionDto) {
    const position = new Position()
    position.title = dto.title
    position.thai_title = dto.thai_title
    position.description = dto.description ?? ''


    if (dto.department_id) {
      position.department = await this.departmentRepo.findOneByOrFail({ id: dto.department_id })
    }

    return this.positionRepo.save(position)
  }

  findAll() {
    return this.positionRepo.find()
  }

  findOne(id: number) {
    return this.positionRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdatePositionDto) {
    const position = await this.positionRepo.findOneBy({ id })
    if (!position) throw new NotFoundException('ไม่พบตำแหน่ง')

    Object.assign(position, dto)

    if (dto.department_id) {
      position.department = await this.departmentRepo.findOneByOrFail({ id: dto.department_id })
    }

    return this.positionRepo.save(position)
  }

  async remove(id: number) {
    const position = await this.positionRepo.findOneBy({ id })
    if (!position) throw new NotFoundException('ไม่พบตำแหน่งที่จะลบ')

    return this.positionRepo.remove(position)
  }
}
