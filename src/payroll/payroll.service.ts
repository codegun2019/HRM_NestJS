
// payroll/payroll.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Payroll } from './entities/payroll.entity';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';

@Injectable()
export class PayrollService {
  constructor(
    @InjectRepository(Payroll)
    private readonly repo: Repository<Payroll>,
  ) {}

  create(dto: CreatePayrollDto) {
    const entity = this.repo.create({
      payroll_period_start: dto.payroll_period_start,
      payroll_period_end: dto.payroll_period_end,
      payment_date: dto.payment_date,
      status: dto.status,
      createdBy: { id: dto.createdById },
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['createdBy'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['createdBy'] });
  }

  async update(id: number, dto: UpdatePayrollDto) {
    const updateData: any = {
      payroll_period_start: dto.payroll_period_start,
      payroll_period_end: dto.payroll_period_end,
      payment_date: dto.payment_date,
      status: dto.status,
    };
    if (dto.createdById) updateData.createdBy = { id: dto.createdById };
    await this.repo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}