// src/employee-shifts/dto/update-employee-shift.dto.ts
import { PartialType } from '@nestjs/mapped-types'
import { CreateEmployeeShiftDto } from './create-employee-shift.dto'

export class UpdateEmployeeShiftDto extends PartialType(CreateEmployeeShiftDto) {}
