// job-posting.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn
} from 'typeorm';
import { Position } from '../../positions/entities/position.entity';
import { Department } from '../../departments/entities/department.entity';
import { User } from '../../users/entities/user.entity';

export enum JobPostingStatus {
  DRAFT = 'draft',
  OPEN = 'open',
  CLOSED = 'closed',
  CANCELLED = 'cancelled'
}

@Entity('job_postings')
export class JobPosting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  title: string;

  @ManyToOne(() => Position, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'position_id' })
  position: Position;

  @ManyToOne(() => Department, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @Column('text')
  description: string;

  @Column('text')
  requirements: string;

  @Column({ type: 'enum', enum: JobPostingStatus, default: JobPostingStatus.DRAFT })
  status: JobPostingStatus;

  @Column({ type: 'int', default: 1 })
  vacancies: number;

  @Column({ type: 'date', nullable: true })
  posting_date?: string;

  @Column({ type: 'date', nullable: true })
  closing_date?: string;

  @ManyToOne(() => User, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'created_by' })
  created_by: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
