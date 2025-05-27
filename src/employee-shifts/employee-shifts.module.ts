// src/employee-shifts/employee-shifts.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeShiftsService } from './employee-shifts.service'
import { EmployeeShiftsController } from './employee-shifts.controller'
import { EmployeeShift } from './entities/employee-shift.entity'
import { Employee } from 'src/employees/entities/employee.entity'
import { Shift } from 'src/shifts/entities/shift.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeShift, Employee, Shift])],
  controllers: [EmployeeShiftsController],
  providers: [EmployeeShiftsService],
})
export class EmployeeShiftsModule {}
