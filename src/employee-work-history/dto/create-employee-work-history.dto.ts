// src/employee-work-history/dto/create-employee-work-history.dto.ts
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateEmployeeWorkHistoryDto {
  @IsInt()
  employee_id: number

  @IsNotEmpty()
  @IsString()
  company_name: string

  @IsNotEmpty()
  @IsString()
  position: string

  @IsDateString()
  start_date: string

  @IsOptional()
  @IsDateString()
  end_date?: string

  @IsOptional()
  @IsString()
  responsibilities?: string
}
