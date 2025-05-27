// src/departments/dto/create-department.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator'

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  thai_name: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsInt()
  manager_id?: number

  @IsOptional()
  @IsInt()
  parent_department_id?: number
}
