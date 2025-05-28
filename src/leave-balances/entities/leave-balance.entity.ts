// leave-balances/entities/leave-balance.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity';
import { LeaveType } from '../../leave-types/entities/leave-type.entity';

@Entity('leave_balances')
@Unique(['employee', 'leaveType', 'year'])
export class LeaveBalance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => LeaveType, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'leave_type_id' })
  leaveType: LeaveType;

  @Column()
  year: number;

  @Column('decimal', { precision: 5, scale: 1 })
  total_days: number;

  @Column('decimal', { precision: 5, scale: 1, default: 0 })
  used_days: number;

  @Column('decimal', { precision: 5, scale: 1 })
  remaining_days: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}