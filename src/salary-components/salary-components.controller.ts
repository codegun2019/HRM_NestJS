import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalaryComponentsService } from './salary-components.service';
import { CreateSalaryComponentDto } from './dto/create-salary-component.dto';
import { UpdateSalaryComponentDto } from './dto/update-salary-component.dto';

@Controller('salary-components')
export class SalaryComponentsController {
  constructor(private readonly salaryComponentsService: SalaryComponentsService) {}

  @Post()
  create(@Body() createSalaryComponentDto: CreateSalaryComponentDto) {
    return this.salaryComponentsService.create(createSalaryComponentDto);
  }

  @Get()
  findAll() {
    return this.salaryComponentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salaryComponentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalaryComponentDto: UpdateSalaryComponentDto) {
    return this.salaryComponentsService.update(+id, updateSalaryComponentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salaryComponentsService.remove(+id);
  }
}
