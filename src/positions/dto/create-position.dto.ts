// src/positions/dto/create-position.dto.ts
import { IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator'

export class CreatePositionDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  thai_title: string

  @IsOptional()
  @IsString()
  description?: string

  @IsOptional()
  @IsInt()
  department_id?: number
}
