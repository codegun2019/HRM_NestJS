// leave-types/dto/update-leave-type.dto.ts
import { PartialType } from '@nestjs/mapped-types';
export class UpdateLeaveTypeDto extends PartialType(CreateLeaveTypeDto) {}
// leave-types/leave-types.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LeaveType } from '../entities/leave-type.entity';
import { CreateLeaveTypeDto } from './create-leave-type.dto';

@Injectable()
export class LeaveTypesService {
  constructor(
    @InjectRepository(LeaveType)
    private readonly leaveTypeRepo: Repository<LeaveType>,
  ) {}

  create(dto: CreateLeaveTypeDto) {
    const entity = this.leaveTypeRepo.create(dto);
    return this.leaveTypeRepo.save(entity);
  }

  findAll() {
    return this.leaveTypeRepo.find();
  }

  findOne(id: number) {
    return this.leaveTypeRepo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateLeaveTypeDto) {
    await this.leaveTypeRepo.update(id, dto);
    return this.leaveTypeRepo.findOneBy({ id });
  }

  remove(id: number) {
    return this.leaveTypeRepo.delete(id);
  }
}