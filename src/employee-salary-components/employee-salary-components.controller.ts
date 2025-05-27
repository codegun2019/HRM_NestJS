import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeSalaryComponentsService } from './employee-salary-components.service';
import { CreateEmployeeSalaryComponentDto } from './dto/create-employee-salary-component.dto';
import { UpdateEmployeeSalaryComponentDto } from './dto/update-employee-salary-component.dto';

@Controller('employee-salary-components')
export class EmployeeSalaryComponentsController {
  constructor(private readonly employeeSalaryComponentsService: EmployeeSalaryComponentsService) {}

  @Post()
  create(@Body() createEmployeeSalaryComponentDto: CreateEmployeeSalaryComponentDto) {
    return this.employeeSalaryComponentsService.create(createEmployeeSalaryComponentDto);
  }

  @Get()
  findAll() {
    return this.employeeSalaryComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employeeSalaryComponentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeSalaryComponentDto: UpdateEmployeeSalaryComponentDto) {
    return this.employeeSalaryComponentsService.update(+id, updateEmployeeSalaryComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeSalaryComponentsService.remove(+id);
  }
}
