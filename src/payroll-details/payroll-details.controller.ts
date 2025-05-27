import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollDetailsService } from './payroll-details.service';
import { CreatePayrollDetailDto } from './dto/create-payroll-detail.dto';
import { UpdatePayrollDetailDto } from './dto/update-payroll-detail.dto';

@Controller('payroll-details')
export class PayrollDetailsController {
  constructor(private readonly payrollDetailsService: PayrollDetailsService) {}

  @Post()
  create(@Body() createPayrollDetailDto: CreatePayrollDetailDto) {
    return this.payrollDetailsService.create(createPayrollDetailDto);
  }

  @Get()
  findAll() {
    return this.payrollDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollDetailDto: UpdatePayrollDetailDto) {
    return this.payrollDetailsService.update(+id, updatePayrollDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollDetailsService.remove(+id);
  }
}
