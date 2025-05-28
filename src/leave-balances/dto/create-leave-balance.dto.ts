
// leave-balances/dto/create-leave-balance.dto.ts
import { IsInt, IsNumber, Min, Max } from 'class-validator';

export class CreateLeaveBalanceDto {
  @IsInt()
  employeeId: number;

  @IsInt()
  leaveTypeId: number;

  @IsInt()
  year: number;

  @IsNumber()
  @Min(0)
  total_days: number;

  @IsNumber()
  @Min(0)
  used_days: number;

  @IsNumber()
  @Min(0)
  remaining_days: number;
}
