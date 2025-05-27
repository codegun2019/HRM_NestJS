// src/employee-work-history/employee-work-history.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EmployeeWorkHistoryService } from './employee-work-history.service'
import { EmployeeWorkHistoryController } from './employee-work-history.controller'
import { EmployeeWorkHistory } from './entities/employee-work-history.entity'
import { Employee } from 'src/employees/entities/employee.entity'

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeWorkHistory, Employee])],
  controllers: [EmployeeWorkHistoryController],
  providers: [EmployeeWorkHistoryService],
})
export class EmployeeWorkHistoryModule {}
