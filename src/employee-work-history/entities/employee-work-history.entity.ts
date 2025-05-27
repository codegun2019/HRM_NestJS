// src/employee-work-history/entities/employee-work-history.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
  CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'

@Entity('employee_work_history')
export class EmployeeWorkHistory {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Employee, { onDelete: 'CASCADE', eager: true })
  employee: Employee

  @Column()
  company_name: string

  @Column()
  position: string

  @Column({ type: 'date' })
  start_date: string

  @Column({ type: 'date', nullable: true })
  end_date: string

  @Column({ type: 'text', nullable: true })
  responsibilities: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
