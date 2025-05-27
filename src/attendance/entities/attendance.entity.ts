// src/attendance/entities/attendance.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
  CreateDateColumn, UpdateDateColumn, Unique
} from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'

@Entity('attendance')
@Unique(['employee', 'date']) // ✅ ไม่ให้บันทึกซ้ำในวันเดียวกัน
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => Employee, employee => employee.attendance)
  employee: Employee

  @Column({ type: 'date' })
  date: string

  @Column({ type: 'datetime', nullable: true })
  time_in: Date

  @Column({ type: 'datetime', nullable: true })
  time_out: Date

  @Column({
    type: 'enum',
    enum: ['present', 'absent', 'late', 'half_day'],
    default: 'present'
  })
  status: string

  @Column({ type: 'text', nullable: true })
  note: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
