
// payroll/dto/create-payroll.dto.ts
import { IsDateString, IsEnum, IsInt } from 'class-validator';
import { PayrollStatus } from '../entities/payroll.entity';

export class CreatePayrollDto {
  @IsDateString()
  payroll_period_start: string;

  @IsDateString()
  payroll_period_end: string;

  @IsDateString()
  payment_date: string;

  @IsEnum(PayrollStatus)
  status: PayrollStatus;

  @IsInt()
  createdById: number;
}
