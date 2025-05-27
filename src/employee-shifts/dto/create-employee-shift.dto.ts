// src/employee-shifts/dto/create-employee-shift.dto.ts
import { IsDateString, IsInt, IsOptional } from 'class-validator'

export class CreateEmployeeShiftDto {
  @IsInt()
  employee_id: number

  @IsInt()
  shift_id: number

  @IsDateString()
  effective_date: string

  @IsOptional()
  @IsDateString()
  end_date?: string | null

}
