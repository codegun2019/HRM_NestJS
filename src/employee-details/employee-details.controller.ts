// src/employee-details/employee-details.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EmployeeDetailsService } from './employee-details.service'
import { CreateEmployeeDetailDto } from './dto/create-employee-detail.dto'
import { UpdateEmployeeDetailDto } from './dto/update-employee-detail.dto'

@Controller('employee-details')
export class EmployeeDetailsController {
  constructor(private readonly service: EmployeeDetailsService) {}

  @Post()
  create(@Body() dto: CreateEmployeeDetailDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeDetailDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
