// salary-components/dto/create-salary-component.dto.ts
import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { SalaryComponentType } from '../entities/salary-component.entity';

export class CreateSalaryComponentDto {
  @IsString()
  name: string;

  @IsEnum(SalaryComponentType)
  type: SalaryComponentType;

  @IsBoolean()
  is_taxable: boolean;

  @IsBoolean()
  is_fixed: boolean;
}