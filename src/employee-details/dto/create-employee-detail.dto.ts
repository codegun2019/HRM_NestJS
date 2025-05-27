// src/employee-details/dto/create-employee-detail.dto.ts
import { IsEnum, IsOptional, IsString, IsDateString, IsInt } from 'class-validator'

export class CreateEmployeeDetailDto {
  @IsInt()
  employee_id: number

  @IsOptional()
  @IsDateString()
  date_of_birth?: string

  @IsOptional()
  @IsEnum(['male', 'female', 'other'])
  gender?: string

  @IsOptional()
  @IsEnum(['single', 'married', 'divorced', 'widowed'])
  marital_status?: string

  @IsOptional()
  @IsString()
  nationality?: string

  @IsOptional()
  @IsString()
  id_card_number?: string

  @IsOptional()
  @IsString()
  passport_number?: string

  @IsOptional()
  @IsString()
  tax_id?: string

  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  emergency_contact_name?: string

  @IsOptional()
  @IsString()
  emergency_contact_phone?: string

  @IsOptional()
  @IsString()
  emergency_contact_relationship?: string

  @IsOptional()
  @IsString()
  bank_name?: string

  @IsOptional()
  @IsString()
  bank_account_number?: string
}
