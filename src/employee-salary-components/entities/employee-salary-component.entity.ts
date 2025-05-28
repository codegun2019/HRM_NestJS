// employee-salary-components/entities/employee-salary-component.entity.ts
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
import { SalaryComponent } from '../../salary-components/entities/salary-component.entity';

@Entity('employee_salary_components')
export class EmployeeSalaryComponent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @ManyToOne(() => SalaryComponent, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'component_id' })
  component: SalaryComponent;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'date' })
  effective_date: string;

  @Column({ type: 'date', nullable: true })
  end_date: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
