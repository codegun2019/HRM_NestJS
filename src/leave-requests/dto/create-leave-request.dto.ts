
// leave-requests/dto/create-leave-request.dto.ts
import { IsEnum, IsInt, IsNumber, IsOptional, IsString } from 'class-validator';
import { LeaveRequestStatus } from '../entities/leave-request.entity';

export class CreateLeaveRequestDto {
  @IsInt()
  employeeId: number;

  @IsInt()
  leaveTypeId: number;

  @IsString()
  start_date: string;

  @IsString()
  end_date: string;

  @IsNumber()
  days: number;

  @IsOptional()
  @IsString()
  reason?: string;

  @IsOptional()
  @IsEnum(LeaveRequestStatus)
  status?: LeaveRequestStatus;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsInt()
  approvedById?: number;
}