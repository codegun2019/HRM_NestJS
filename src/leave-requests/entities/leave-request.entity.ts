// leave-requests/entities/leave-request.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity';
import { LeaveType } from '../../leave-types/entities/leave-type.entity';
import { User } from '../../users/user.entity';

export enum LeaveRequestStatus {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled',
}

@Entity('leave_requests')
export class LeaveRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => LeaveType, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'leave_type_id' })
  leaveType: LeaveType;

  @Column({ type: 'date' })
  start_date: string;

  @Column({ type: 'date' })
  end_date: string;

  @Column('decimal', { precision: 5, scale: 1 })
  days: number;

  @Column({ type: 'text', nullable: true })
  reason: string;

  @Column({
    type: 'enum',
    enum: LeaveRequestStatus,
    default: LeaveRequestStatus.PENDING,
  })
  status: LeaveRequestStatus;

  @Column({ type: 'text', nullable: true })
  comment: string;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'approved_by' })
  approvedBy: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}