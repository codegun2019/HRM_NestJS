// src/employee-education/dto/create-employee-education.dto.ts
import { IsDateString, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateEmployeeEducationDto {
  @IsInt()
  employee_id: number

  @IsNotEmpty()
  @IsString()
  institution: string

  @IsNotEmpty()
  @IsString()
  degree: string

  @IsOptional()
  @IsString()
  field_of_study?: string

  @IsOptional()
  @IsDateString()
  start_date?: string

  @IsOptional()
  @IsDateString()
  end_date?: string

  @IsOptional()
  @IsString()
  grade?: string
}
