// src/employee-education/entities/employee-education.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
  CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'

@Entity('employee_education')
export class EmployeeEducation {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Employee, { onDelete: 'CASCADE', eager: true })
  employee: Employee

  @Column()
  institution: string

  @Column()
  degree: string

  @Column({ nullable: true })
  field_of_study: string

  @Column({ type: 'date', nullable: true })
  start_date: string

  @Column({ type: 'date', nullable: true })
  end_date: string

  @Column({ nullable: true })
  grade: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
