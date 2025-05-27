// src/employee-shifts/entities/employee-shift.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
  CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'
import { Shift } from 'src/shifts/entities/shift.entity'

@Entity('employee_shifts')
export class EmployeeShift {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Employee, { onDelete: 'CASCADE', eager: true })
  employee: Employee

  @ManyToOne(() => Shift, { onDelete: 'CASCADE', eager: true })
  shift: Shift

  @Column({ type: 'date' })
  effective_date: string

  @Column({ type: 'date', nullable: true })
  end_date: string | null

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
