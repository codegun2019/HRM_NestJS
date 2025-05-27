// src/employee-work-history/dto/update-employee-work-history.dto.ts
import { PartialType } from '@nestjs/mapped-types'
import { CreateEmployeeWorkHistoryDto } from './create-employee-work-history.dto'

export class UpdateEmployeeWorkHistoryDto extends PartialType(CreateEmployeeWorkHistoryDto) {}
