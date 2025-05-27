// src/employee-details/employee-details.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeDetailsService } from './employee-details.service'
import { EmployeeDetailsController } from './employee-details.controller'
import { EmployeeDetail } from './entities/employee-detail.entity'
import { Employee } from 'src/employees/entities/employee.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeDetail, Employee])],
  controllers: [EmployeeDetailsController],
  providers: [EmployeeDetailsService]
})
export class EmployeeDetailsModule {}
