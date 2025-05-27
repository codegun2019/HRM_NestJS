import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class CreateShiftDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  start_time: string

  @IsNotEmpty()
  @IsString()
  end_time: string

  @IsOptional()
  @IsString()
  description?: string
}
