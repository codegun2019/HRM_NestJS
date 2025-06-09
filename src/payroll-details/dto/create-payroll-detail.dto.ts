
// create-payroll-detail.dto.ts
import { IsDecimal, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { PayrollStatus, PaymentMethod } from '../entities/payroll-detail.entity';

export class CreatePayrollDetailDto {
  @IsNotEmpty()
  payroll: number;

  @IsNotEmpty()
  employee: number;

  @IsDecimal()
  basic_salary: number;

  @IsDecimal()
  gross_salary: number;

  @IsDecimal()
  total_deductions: number;

  @IsDecimal()
  net_salary: number;

  @IsDecimal()
  tax: number;

  @IsEnum(PayrollStatus)
  status: PayrollStatus;

  @IsEnum(PaymentMethod)
  payment_method: PaymentMethod;

  @IsOptional()
  @IsString()
  note?: string;
}