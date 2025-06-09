
// payroll-details.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PayrollDetail } from './entities/payroll-detail.entity';
import { CreatePayrollDetailDto } from './dto/create-payroll-detail.dto';
import { UpdatePayrollDetailDto } from './dto/update-payroll-detail.dto';

@Injectable()
export class PayrollDetailsService {
  constructor(
    @InjectRepository(PayrollDetail)
    private repo: Repository<PayrollDetail>
  ) {}

  create(dto: CreatePayrollDetailDto) {
    const detail = this.repo.create({
      payroll: { id: dto.payroll },
      employee: { id: dto.employee },
      basic_salary: dto.basic_salary,
      gross_salary: dto.gross_salary,
      total_deductions: dto.total_deductions,
      net_salary: dto.net_salary,
      tax: dto.tax,
      status: dto.status,
      payment_method: dto.payment_method,
      note: dto.note
    });
    return this.repo.save(detail);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdatePayrollDetailDto) {
    const partialUpdate: any = { ...dto };
    if (dto.payroll) partialUpdate.payroll = { id: dto.payroll };
    if (dto.employee) partialUpdate.employee = { id: dto.employee };
    return this.repo.update(id, partialUpdate);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}