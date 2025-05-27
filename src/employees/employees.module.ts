// src/employees/employees.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeesService } from './employees.service'
import { EmployeesController } from './employees.controller'
import { Employee } from './entities/employee.entity'
import { Department } from 'src/departments/entities/department.entity'
import { Position } from 'src/positions/entities/position.entity'
import { User } from 'src/users/entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Department, Position, User])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
