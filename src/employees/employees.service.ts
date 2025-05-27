// src/employees/employees.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Employee } from './entities/employee.entity'
import { CreateEmployeeDto } from './dto/create-employee.dto'
import { UpdateEmployeeDto } from './dto/update-employee.dto'
import { Department } from 'src/departments/entities/department.entity'
import { Position } from 'src/positions/entities/position.entity'
import { User } from 'src/users/entities/user.entity'

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,

    @InjectRepository(Department)
    private departmentRepo: Repository<Department>,

    @InjectRepository(Position)
    private positionRepo: Repository<Position>,

    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async create(dto: CreateEmployeeDto) {
    const employee = new Employee()

    employee.employee_id = dto.employee_id
    employee.first_name = dto.first_name
    employee.last_name = dto.last_name
    employee.thai_first_name = dto.thai_first_name
    employee.thai_last_name = dto.thai_last_name
    employee.email = dto.email
    employee.phone = dto.phone ?? ''
    employee.status = dto.status || 'active'
    employee.profile_image = dto.profile_image ?? ''

    employee.department = await this.departmentRepo.findOneByOrFail({ id: dto.department_id })
    employee.position = await this.positionRepo.findOneByOrFail({ id: dto.position_id })

    if (dto.user_id) {
      employee.user = await this.userRepo.findOneByOrFail({ id: dto.user_id })
    }

    return this.employeeRepo.save(employee)
  }

  findAll() {
    return this.employeeRepo.find()
  }

  findOne(id: number) {
    return this.employeeRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateEmployeeDto) {
    const employee = await this.employeeRepo.findOneBy({ id })
    if (!employee) throw new NotFoundException('ไม่พบพนักงานที่ต้องการอัปเดต')

    Object.assign(employee, dto)

    if (dto.department_id) {
      employee.department = await this.departmentRepo.findOneByOrFail({ id: dto.department_id })
    }

    if (dto.position_id) {
      employee.position = await this.positionRepo.findOneByOrFail({ id: dto.position_id })
    }

    return this.employeeRepo.save(employee)
  }

  async remove(id: number) {
    const employee = await this.employeeRepo.findOneBy({ id })
    if (!employee) throw new NotFoundException('ไม่พบพนักงานที่ต้องการลบ')
    return this.employeeRepo.remove(employee)
  }
}
