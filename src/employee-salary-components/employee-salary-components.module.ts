
// employee-salary-components/employee-salary-components.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSalaryComponent } from './entities/employee-salary-component.entity';
import { EmployeeSalaryComponentsService } from './employee-salary-components.service';
import { EmployeeSalaryComponentsController } from './employee-salary-components.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeSalaryComponent])],
  controllers: [EmployeeSalaryComponentsController],
  providers: [EmployeeSalaryComponentsService],
})
export class EmployeeSalaryComponentsModule {}