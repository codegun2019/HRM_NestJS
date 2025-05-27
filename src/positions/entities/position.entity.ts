// src/positions/entities/position.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
  CreateDateColumn, UpdateDateColumn
} from 'typeorm'
import { Department } from 'src/departments/entities/department.entity'

@Entity('positions')
export class Position {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  title: string

  @Column()
  thai_title: string

  @Column({ nullable: true })
  description: string

  @ManyToOne(() => Department, { nullable: true, onDelete: 'SET NULL', eager: true })
  department: Department

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
