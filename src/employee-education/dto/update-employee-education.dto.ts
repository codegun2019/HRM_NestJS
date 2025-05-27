// src/employee-education/dto/update-employee-education.dto.ts
import { PartialType } from '@nestjs/mapped-types'
import { CreateEmployeeEducationDto } from './create-employee-education.dto'

export class UpdateEmployeeEducationDto extends PartialType(CreateEmployeeEducationDto) {}
