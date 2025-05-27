// src/employee-work-history/employee-work-history.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { EmployeeWorkHistoryService } from './employee-work-history.service'
import { CreateEmployeeWorkHistoryDto } from './dto/create-employee-work-history.dto'
import { UpdateEmployeeWorkHistoryDto } from './dto/update-employee-work-history.dto'

@Controller('employee-work-history')
export class EmployeeWorkHistoryController {
  constructor(private readonly service: EmployeeWorkHistoryService) {}

  @Post()
  create(@Body() dto: CreateEmployeeWorkHistoryDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeWorkHistoryDto) {
    return this.service.update(+id, dto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id)
  }
}
