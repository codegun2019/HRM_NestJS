
// payroll/dto/update-payroll.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreatePayrollDto } from './create-payroll.dto';

export class UpdatePayrollDto extends PartialType(CreatePayrollDto) {}
