import { Module } from '@nestjs/common';
import { EmployeeSalaryComponentsService } from './employee-salary-components.service';
import { EmployeeSalaryComponentsController } from './employee-salary-components.controller';

@Module({
  controllers: [EmployeeSalaryComponentsController],
  providers: [EmployeeSalaryComponentsService],
})
export class EmployeeSalaryComponentsModule {}
