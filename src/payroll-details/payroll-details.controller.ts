
// payroll-details.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollDetailsService } from './payroll-details.service';
import { CreatePayrollDetailDto } from './dto/create-payroll-detail.dto';
import { UpdatePayrollDetailDto } from './dto/update-payroll-detail.dto';

@Controller('payroll-details')
export class PayrollDetailsController {
  constructor(private readonly service: PayrollDetailsService) {}

  @Post()
  create(@Body() dto: CreatePayrollDetailDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdatePayrollDetailDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
