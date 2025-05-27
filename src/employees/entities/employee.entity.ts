// src/employees/entities/employee.entity.ts
import {
  Entity,OneToMany, PrimaryGeneratedColumn, Column, ManyToOne,
  OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn,
} from 'typeorm'
import { Department } from 'src/departments/entities/department.entity'
import { Position } from 'src/positions/entities/position.entity'
import { User } from 'src/users/entities/user.entity'
import { Attendance } from '../../attendance/entities/attendance.entity'

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  employee_id: string

  @OneToOne(() => User, { nullable: true, onDelete: 'SET NULL', eager: true })
  @JoinColumn()
  user: User

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column()
  thai_first_name: string

  @Column()
  thai_last_name: string

  @ManyToOne(() => Position, { nullable: false, eager: true, onDelete: 'RESTRICT' })
  position: Position

  @ManyToOne(() => Department, { nullable: false, eager: true, onDelete: 'RESTRICT' })
  department: Department

  @Column({ unique: true })
  email: string

  @Column({ nullable: true })
  phone: string

  @Column({
    type: 'enum',
    enum: ['active', 'inactive', 'on_leave', 'terminated'],
    default: 'active'
  })
  status: string

  @Column({ nullable: true })
  profile_image: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Attendance, attendance => attendance.employee)
  attendance: Attendance[]
}
