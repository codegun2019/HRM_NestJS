
// employee-salary-components/employee-salary-components.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeSalaryComponentsService } from './employee-salary-components.service';
import { CreateEmployeeSalaryComponentDto } from './dto/create-employee-salary-component.dto';
import { UpdateEmployeeSalaryComponentDto } from './dto/update-employee-salary-component.dto';

@Controller('employee-salary-components')
export class EmployeeSalaryComponentsController {
  constructor(private readonly service: EmployeeSalaryComponentsService) {}

  @Post()
  create(@Body() dto: CreateEmployeeSalaryComponentDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEmployeeSalaryComponentDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}