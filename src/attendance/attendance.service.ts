// src/attendance/attendance.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Attendance } from './entities/attendance.entity'
import { CreateAttendanceDto } from './dto/create-attendance.dto'
import { UpdateAttendanceDto } from './dto/update-attendance.dto'
import { Employee } from 'src/employees/entities/employee.entity'

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private attendanceRepo: Repository<Attendance>,

    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>
  ) {}

  async create(dto: CreateAttendanceDto) {
  const employee = await this.employeeRepo.findOne({ where: { id: dto.employee_id } })

  // const employee = await this.employeeRepo.findOne({
  //   where: { id: dto.employee_id },
  // })

  if (!employee) {
    throw new NotFoundException('ไม่พบพนักงานที่ระบุ')
  }

  const attendance = this.attendanceRepo.create({
    date: dto.date,
    status: dto.status,
    employee,
  })

    return this.attendanceRepo.save(attendance)
  }

  findAll() {
    return this.attendanceRepo.find()
  }

  findOne(id: number) {
    return this.attendanceRepo.findOneBy({ id })
  }

  async update(id: number, dto: UpdateAttendanceDto) {
    const attendance = await this.attendanceRepo.findOneBy({ id })
    if (!attendance) throw new NotFoundException('ไม่พบข้อมูลการเข้างาน')

    if (dto.employee_id) {
      attendance.employee = await this.employeeRepo.findOneByOrFail({ id: dto.employee_id })
    }

    Object.assign(attendance, {
      ...dto,
      time_in: dto.time_in ? new Date(dto.time_in) : attendance.time_in,
      time_out: dto.time_out ? new Date(dto.time_out) : attendance.time_out,
    })

    return this.attendanceRepo.save(attendance)
  }

  async remove(id: number) {
    const attendance = await this.attendanceRepo.findOneBy({ id })
    if (!attendance) throw new NotFoundException('ไม่พบข้อมูลการเข้างาน')

    return this.attendanceRepo.remove(attendance)
  }
}
