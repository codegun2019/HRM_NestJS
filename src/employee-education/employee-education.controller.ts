// src/employee-education/employee-education.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EmployeeEducationService } from './employee-education.service'
import { CreateEmployeeEducationDto } from './dto/create-employee-education.dto'
import { UpdateEmployeeEducationDto } from './dto/update-employee-education.dto'

@Controller('employee-education')
export class EmployeeEducationController {
  constructor(private readonly service: EmployeeEducationService) {}

  @Post()
  create(@Body() dto: CreateEmployeeEducationDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeEducationDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
