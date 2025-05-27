import { Injectable } from '@nestjs/common';
import { CreateEmployeeSalaryComponentDto } from './dto/create-employee-salary-component.dto';
import { UpdateEmployeeSalaryComponentDto } from './dto/update-employee-salary-component.dto';

@Injectable()
export class EmployeeSalaryComponentsService {
  create(createEmployeeSalaryComponentDto: CreateEmployeeSalaryComponentDto) {
    return 'This action adds a new employeeSalaryComponent';
  }

  findAll() {
    return `This action returns all employeeSalaryComponents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeeSalaryComponent`;
  }

  update(id: number, updateEmployeeSalaryComponentDto: UpdateEmployeeSalaryComponentDto) {
    return `This action updates a #${id} employeeSalaryComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeeSalaryComponent`;
  }
}
