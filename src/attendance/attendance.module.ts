// src/attendance/attendance.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AttendanceService } from './attendance.service'
import { AttendanceController } from './attendance.controller'
import { Attendance } from './entities/attendance.entity'
import { Employee } from 'src/employees/entities/employee.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, Employee])],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
