
// leave-balances/dto/update-leave-balance.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaveBalanceDto } from './create-leave-balance.dto';

export class UpdateLeaveBalanceDto extends PartialType(CreateLeaveBalanceDto) {}

// leave-balances/leave-balances.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveBalance } from '../entities/leave-balance.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { LeaveType } from '../../leave-types/entities/leave-type.entity';

@Injectable()
export class LeaveBalancesService {
  constructor(
    @InjectRepository(LeaveBalance)
    private readonly repo: Repository<LeaveBalance>,
  ) {}

  create(dto: CreateLeaveBalanceDto) {
    const entity = this.repo.create({
      ...dto,
      employee: { id: dto.employeeId } as Employee,
      leaveType: { id: dto.leaveTypeId } as LeaveType,
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['employee', 'leaveType'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['employee', 'leaveType'] });
  }

  async update(id: number, dto: UpdateLeaveBalanceDto) {
    const updateData: any = { ...dto };
    if (dto.employeeId) updateData.employee = { id: dto.employeeId };
    if (dto.leaveTypeId) updateData.leaveType = { id: dto.leaveTypeId };
    await this.repo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}