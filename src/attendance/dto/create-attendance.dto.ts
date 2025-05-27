// src/attendance/dto/create-attendance.dto.ts
import { IsDateString, IsEnum, IsOptional, IsString, IsInt } from 'class-validator'

export class CreateAttendanceDto {
  @IsInt()
  employee_id: number

  @IsDateString()
  date: string

  @IsOptional()
  @IsDateString()
  time_in?: string

  @IsOptional()
  @IsDateString()
  time_out?: string

  @IsEnum(['present', 'absent', 'late', 'half_day'])
  status: string

  @IsOptional()
  @IsString()
  note?: string
}
