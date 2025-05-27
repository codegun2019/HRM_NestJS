// src/employees/dto/create-employee.dto.ts
import {
  IsString, IsEmail, IsEnum, IsOptional, IsNotEmpty
} from 'class-validator'

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  employee_id: string

  @IsOptional()
  user_id?: number

  @IsString()
  first_name: string

  @IsString()
  last_name: string

  @IsString()
  thai_first_name: string

  @IsString()
  thai_last_name: string

  @IsNotEmpty()
  position_id: number

  @IsNotEmpty()
  department_id: number

  @IsEmail()
  email: string

  @IsOptional()
  phone?: string

  @IsOptional()
  @IsEnum(['active', 'inactive', 'on_leave', 'terminated'])
  status?: string

  @IsOptional()
  profile_image?: string
}
