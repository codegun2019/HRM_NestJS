import { PartialType } from '@nestjs/swagger';
import { CreateEmployeeSalaryComponentDto } from './create-employee-salary-component.dto';

export class UpdateEmployeeSalaryComponentDto extends PartialType(CreateEmployeeSalaryComponentDto) {}
