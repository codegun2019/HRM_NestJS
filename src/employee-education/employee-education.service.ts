// src/employee-education/employee-education.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EmployeeEducation } from './entities/employee-education.entity'
import { CreateEmployeeEducationDto } from './dto/create-employee-education.dto'
import { UpdateEmployeeEducationDto } from './dto/update-employee-education.dto'
import { Employee } from 'src/employees/entities/employee.entity'

@Injectable()
export class EmployeeEducationService {
  constructor(
    @InjectRepository(EmployeeEducation)
    private eduRepo: Repository<EmployeeEducation>,

    @InjectRepository(Employee)
    private empRepo: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeEducationDto) {
    const employee = await this.empRepo.findOneByOrFail({ id: dto.employee_id })

    const record = this.eduRepo.create({
      ...dto,
      employee,
    })

    return this.eduRepo.save(record)
  }

  findAll() {
    return this.eduRepo.find()
  }

  findOne(id: number) {
    return this.eduRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateEmployeeEducationDto) {
    const record = await this.eduRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบประวัติการศึกษานี้')

    if (dto.employee_id) {
      record.employee = await this.empRepo.findOneByOrFail({ id: dto.employee_id })
    }

    Object.assign(record, dto)
    return this.eduRepo.save(record)
  }

  async remove(id: number) {
    const record = await this.eduRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบประวัติการศึกษาที่ต้องการลบ')

    return this.eduRepo.remove(record)
  }
}
