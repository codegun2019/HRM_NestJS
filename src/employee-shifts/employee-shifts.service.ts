// src/employee-shifts/employee-shifts.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { EmployeeShift } from './entities/employee-shift.entity'
import { CreateEmployeeShiftDto } from './dto/create-employee-shift.dto'
import { UpdateEmployeeShiftDto } from './dto/update-employee-shift.dto'
import { Employee } from 'src/employees/entities/employee.entity'
import { Shift } from 'src/shifts/entities/shift.entity'

@Injectable()
export class EmployeeShiftsService {
  constructor(
    @InjectRepository(EmployeeShift)
    private shiftRepo: Repository<EmployeeShift>,

    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,

    @InjectRepository(Shift)
    private shiftEntityRepo: Repository<Shift>
  ) {}

  async create(dto: CreateEmployeeShiftDto) {
    const employee = await this.employeeRepo.findOneByOrFail({ id: dto.employee_id })
    const shift = await this.shiftEntityRepo.findOneByOrFail({ id: dto.shift_id })

    const employeeShift = this.shiftRepo.create({
      employee,
      shift,
      effective_date: dto.effective_date,
      end_date: dto.end_date || null,
    })

    return this.shiftRepo.save(employeeShift)
  }

  findAll() {
    return this.shiftRepo.find()
  }

  findOne(id: number) {
    return this.shiftRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateEmployeeShiftDto) {
    const record = await this.shiftRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบข้อมูลการมอบกะพนักงาน')

    if (dto.employee_id) {
      record.employee = await this.employeeRepo.findOneByOrFail({ id: dto.employee_id })
    }

    if (dto.shift_id) {
      record.shift = await this.shiftEntityRepo.findOneByOrFail({ id: dto.shift_id })
    }

    Object.assign(record, {
      ...dto,
      end_date: dto.end_date ?? record.end_date,
    })

    return this.shiftRepo.save(record)
  }

  async remove(id: number) {
    const record = await this.shiftRepo.findOneBy({ id })
    if (!record) throw new NotFoundException('ไม่พบข้อมูลที่จะลบ')

    return this.shiftRepo.remove(record)
  }
}
