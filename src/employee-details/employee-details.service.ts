// src/employee-details/employee-details.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EmployeeDetail } from './entities/employee-detail.entity'
import { CreateEmployeeDetailDto } from './dto/create-employee-detail.dto'
import { UpdateEmployeeDetailDto } from './dto/update-employee-detail.dto'
import { Employee } from 'src/employees/entities/employee.entity'

@Injectable()
export class EmployeeDetailsService {
  constructor(
    @InjectRepository(EmployeeDetail)
    private detailsRepo: Repository<EmployeeDetail>,

    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>
  ) {}

  async create(dto: CreateEmployeeDetailDto) {
    const employee = await this.employeeRepo.findOneByOrFail({ id: dto.employee_id })
    const detail = this.detailsRepo.create({
      ...dto,
      employee
    })
    return this.detailsRepo.save(detail)
  }

  findAll() {
    return this.detailsRepo.find()
  }

  findOne(id: number) {
    return this.detailsRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateEmployeeDetailDto) {
    const detail = await this.detailsRepo.findOneBy({ id })
    if (!detail) throw new NotFoundException('ไม่พบข้อมูลพนักงานเพิ่มเติม')

    if (dto.employee_id) {
      const employee = await this.employeeRepo.findOneByOrFail({ id: dto.employee_id })
      detail.employee = employee
    }

    Object.assign(detail, dto)
    return this.detailsRepo.save(detail)
  }

  async remove(id: number) {
    const detail = await this.detailsRepo.findOneBy({ id })
    if (!detail) throw new NotFoundException('ไม่พบข้อมูลพนักงานเพิ่มเติมที่จะลบ')

    return this.detailsRepo.remove(detail)
  }
}
