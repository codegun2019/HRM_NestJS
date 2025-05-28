// employee-salary-components/dto/create-employee-salary-component.dto.ts
import { IsDateString, IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateEmployeeSalaryComponentDto {
  @IsInt()
  employeeId: number;

  @IsInt()
  componentId: number;

  @IsNumber()
  amount: number;

  @IsDateString()
  effective_date: string;

  @IsOptional()
  @IsDateString()
  end_date?: string;
}
