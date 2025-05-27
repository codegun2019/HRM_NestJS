// src/employee-work-history/employee-work-history.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EmployeeWorkHistory } from './entities/employee-work-history.entity'
import { CreateEmployeeWorkHistoryDto } from './dto/create-employee-work-history.dto'
import { UpdateEmployeeWorkHistoryDto } from './dto/update-employee-work-history.dto'
import { Employee } from 'src/employees/entities/employee.entity'

@Injectable()
export class EmployeeWorkHistoryService {
  constructor(
    @InjectRepository(EmployeeWorkHistory)
    private historyRepo: Repository<EmployeeWorkHistory>,

    @InjectRepository(Employee)
    private empRepo: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeWorkHistoryDto) {
    const employee = await this.empRepo.findOneByOrFail({ id: dto.employee_id })
    const record = this.historyRepo.create({
      ...dto,
      employee
    })
    return this.historyRepo.save(record)
  }

  findAll() {
    return this.historyRepo.find()
  }

  findOne(id: number) {
    return this.historyRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateEmployeeWorkHistoryDto) {
    const record = await this.historyRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบประวัติการทำงาน')

    if (dto.employee_id) {
      record.employee = await this.empRepo.findOneByOrFail({ id: dto.employee_id })
    }

    Object.assign(record, dto)
    return this.historyRepo.save(record)
  }

  async remove(id: number) {
    const record = await this.historyRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบรายการที่จะลบ')

    return this.historyRepo.remove(record)
  }
}
