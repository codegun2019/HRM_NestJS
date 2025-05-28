// employee-salary-components/dto/update-employee-salary-component.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeeSalaryComponentDto } from './create-employee-salary-component.dto';

export class UpdateEmployeeSalaryComponentDto extends PartialType(CreateEmployeeSalaryComponentDto) {}
