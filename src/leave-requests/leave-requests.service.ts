
// leave-requests/leave-requests.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveRequest } from './entities/leave-request.entity';
import { CreateLeaveRequestDto } from './dto/create-leave-request.dto';
import { UpdateLeaveRequestDto } from './dto/update-leave-request.dto';
import { Employee } from '../employees/entities/employee.entity';
import { LeaveType } from '../leave-types/entities/leave-type.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class LeaveRequestsService {
  constructor(
    @InjectRepository(LeaveRequest)
    private readonly repo: Repository<LeaveRequest>,
  ) {}

  create(dto: CreateLeaveRequestDto) {
    const entity = this.repo.create({
      start_date: dto.start_date,
      end_date: dto.end_date,
      days: dto.days,
      reason: dto.reason,
      status: dto.status,
      comment: dto.comment,
      employee: { id: dto.employeeId },
      leaveType: { id: dto.leaveTypeId },
      ...(dto.approvedById ? { approvedBy: { id: dto.approvedById } } : {}),
    });
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find({ relations: ['employee', 'leaveType', 'approvedBy'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['employee', 'leaveType', 'approvedBy'] });
  }

  async update(id: number, dto: UpdateLeaveRequestDto) {
    const updateData: any = {
      start_date: dto.start_date,
      end_date: dto.end_date,
      days: dto.days,
      reason: dto.reason,
      status: dto.status,
      comment: dto.comment,
    };
    if (dto.employeeId) updateData.employee = { id: dto.employeeId };
    if (dto.leaveTypeId) updateData.leaveType = { id: dto.leaveTypeId };
    if (dto.approvedById !== undefined)
      updateData.approvedBy = dto.approvedById ? { id: dto.approvedById } : null;

    await this.repo.update(id, updateData);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}