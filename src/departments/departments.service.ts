// src/departments/departments.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Department } from './entities/department.entity'
import { CreateDepartmentDto } from './dto/create-department.dto'
import { UpdateDepartmentDto } from './dto/update-department.dto'
import { Employee } from 'src/employees/entities/employee.entity'

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,

    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
  ) {}

  async create(dto: CreateDepartmentDto) {
    const department = new Department()
    department.name = dto.name
    department.thai_name = dto.thai_name
    department.description = dto.description ?? ''

    if (dto.manager_id) {
      department.manager = await this.employeeRepo.findOneByOrFail({ id: dto.manager_id })
    }

    if (dto.parent_department_id) {
      department.parent_department = await this.departmentRepo.findOneByOrFail({ id: dto.parent_department_id })
    }

    return this.departmentRepo.save(department)
  }

  findAll() {
    return this.departmentRepo.find()
  }

  findOne(id: number) {
    return this.departmentRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateDepartmentDto) {
    const dept = await this.departmentRepo.findOneBy({ id })
    if (!dept) throw new NotFoundException('ไม่พบแผนก')

    Object.assign(dept, dto)

    if (dto.manager_id) {
      dept.manager = await this.employeeRepo.findOneByOrFail({ id: dto.manager_id })
    }

    if (dto.parent_department_id) {
      dept.parent_department = await this.departmentRepo.findOneByOrFail({ id: dto.parent_department_id })
    }

    return this.departmentRepo.save(dept)
  }

  async remove(id: number) {
    const dept = await this.departmentRepo.findOneBy({ id })
    if (!dept) throw new NotFoundException('ไม่พบแผนกที่จะลบ')
    return this.departmentRepo.remove(dept)
  }
}
