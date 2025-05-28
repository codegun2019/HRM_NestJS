import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('leave_types')
export class LeaveType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 50 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ name: 'default_days', type: 'int', default: 0 })
  defaultDays: number;

  @Column({ length: 7, default: '#3788d8' })
  color: string;

  @Column({ name: 'requires_approval', default: true })
  requiresApproval: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}