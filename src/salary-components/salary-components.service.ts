import { Injectable } from '@nestjs/common';
import { CreateSalaryComponentDto } from './dto/create-salary-component.dto';
import { UpdateSalaryComponentDto } from './dto/update-salary-component.dto';

@Injectable()
export class SalaryComponentsService {
  create(createSalaryComponentDto: CreateSalaryComponentDto) {
    return 'This action adds a new salaryComponent';
  }

  findAll() {
    return `This action returns all salaryComponents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salaryComponent`;
  }

  update(id: number, updateSalaryComponentDto: UpdateSalaryComponentDto) {
    return `This action updates a #${id} salaryComponent`;
  }

  remove(id: number) {
    return `This action removes a #${id} salaryComponent`;
  }
}
