// src/employee-education/employee-education.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeEducationService } from './employee-education.service'
import { EmployeeEducationController } from './employee-education.controller'
import { EmployeeEducation } from './entities/employee-education.entity'
import { Employee } from 'src/employees/entities/employee.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEducation, Employee])],
  controllers: [EmployeeEducationController],
  providers: [EmployeeEducationService],
})
export class EmployeeEducationModule {}
