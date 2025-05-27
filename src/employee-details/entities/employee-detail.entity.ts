// src/employee-details/entities/employee-detail.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn,
  CreateDateColumn, UpdateDateColumn,
} from 'typeorm'
import { Employee } from 'src/employees/entities/employee.entity'

@Entity('employee_details')
export class EmployeeDetail {
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => Employee, { onDelete: 'CASCADE', eager: true })
  @JoinColumn()
  employee: Employee

  @Column({ type: 'date', nullable: true })
  date_of_birth: string

  @Column({
    type: 'enum',
    enum: ['male', 'female', 'other'],
    nullable: true,
  })
  gender: string

  @Column({
    type: 'enum',
    enum: ['single', 'married', 'divorced', 'widowed'],
    nullable: true,
  })
  marital_status: string

  @Column({ nullable: true })
  nationality: string

  @Column({ nullable: true, unique: true })
  id_card_number: string

  @Column({ nullable: true, unique: true })
  passport_number: string

  @Column({ nullable: true, unique: true })
  tax_id: string

  @Column({ type: 'text', nullable: true })
  address: string

  @Column({ nullable: true })
  emergency_contact_name: string

  @Column({ nullable: true })
  emergency_contact_phone: string

  @Column({ nullable: true })
  emergency_contact_relationship: string

  @Column({ nullable: true })
  bank_name: string

  @Column({ nullable: true })
  bank_account_number: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
