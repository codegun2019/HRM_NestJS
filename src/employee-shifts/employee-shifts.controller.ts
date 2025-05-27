// src/employee-shifts/employee-shifts.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EmployeeShiftsService } from './employee-shifts.service'
import { CreateEmployeeShiftDto } from './dto/create-employee-shift.dto'
import { UpdateEmployeeShiftDto } from './dto/update-employee-shift.dto'

@Controller('employee-shifts')
export class EmployeeShiftsController {
  constructor(private readonly service: EmployeeShiftsService) {}

  @Post()
  create(@Body() dto: CreateEmployeeShiftDto) {
    return this.service.create(dto)
  }

  @Get()
  findAll() {
    return this.service.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeShiftDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
