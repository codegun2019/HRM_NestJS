// src/departments/entities/department.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  name: string

  @Column()
  thai_name: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => Department, (dept) => dept.children, { nullable: true, onDelete: 'SET NULL' })
  parent_department: Department

  @OneToMany(() => Department, (dept) => dept.parent_department)
  children: Department[]

  @ManyToOne(() => Employee, { nullable: true, onDelete: 'SET NULL' })
  manager: Employee

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
