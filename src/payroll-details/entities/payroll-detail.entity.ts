// payroll-detail.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn,
  ManyToOne, JoinColumn, Unique
} from 'typeorm';
import { Payroll } from '../../payroll/entities/payroll.entity';
import { Employee } from '../../employees/entities/employee.entity';

export enum PayrollStatus {
  PENDING = 'pending',
  PAID = 'paid'
}

export enum PaymentMethod {
  BANK_TRANSFER = 'bank_transfer',
  CHECK = 'check',
  CASH = 'cash'
}

@Entity('payroll_details')
@Unique(['payroll', 'employee'])
export class PayrollDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Payroll, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'payroll_id' })
  payroll: Payroll;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE', eager: true })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  basic_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  gross_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  total_deductions: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  net_salary: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  tax: number;

  @Column({ type: 'enum', enum: PayrollStatus, default: PayrollStatus.PENDING })
  status: PayrollStatus;

  @Column({ type: 'enum', enum: PaymentMethod, default: PaymentMethod.BANK_TRANSFER })
  payment_method: PaymentMethod;

  @Column({ type: 'text', nullable: true })
  note?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}