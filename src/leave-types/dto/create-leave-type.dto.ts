// leave-types/dto/create-leave-type.dto.ts
import { IsBoolean, IsInt, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateLeaveTypeDto {
  @IsString()
  @Length(1, 50)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  defaultDays: number;

  @IsOptional()
  @Matches(/^#[0-9A-Fa-f]{6}$/)
  color?: string;

  @IsBoolean()
  requiresApproval: boolean;
}
