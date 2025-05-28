
// employee-salary-components/employee-salary-components.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeSalaryComponent } from './entities/employee-salary-component.entity';
import { CreateEmployeeSalaryComponentDto } from './dto/create-employee-salary-component.dto';
import { UpdateEmployeeSalaryComponentDto } from './dto/update-employee-salary-component.dto';

@Injectable()
export class EmployeeSalaryComponentsService {
  constructor(
    @InjectRepository(EmployeeSalaryComponent)
    private readonly repo: Repository<EmployeeSalaryComponent>,
  ) {}

  create(dto: CreateEmployeeSalaryComponentDto) {
    const entity = this.repo.create({
      amount: dto.amount,
      effective_date: dto.effective_date,
      end_date: dto.end_date,
      employee: { id: dto.employeeId },
      component: { id: dto.componentId },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['employee', 'component'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['employee', 'component'] });
  }

  async update(id: number, dto: UpdateEmployeeSalaryComponentDto) {
    const updateData: any = {
      amount: dto.amount,
      effective_date: dto.effective_date,
      end_date: dto.end_date,
    };
    if (dto.employeeId) updateData.employee = { id: dto.employeeId };
    if (dto.componentId) updateData.component = { id: dto.componentId };

    await this.repo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
