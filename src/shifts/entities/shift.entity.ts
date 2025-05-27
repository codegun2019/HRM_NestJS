// src/shifts/entities/shift.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm'

@Entity('shifts')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ type: 'time' })
  start_time: string

  @Column({ type: 'time' })
  end_time: string

  @Column({ nullable: true, type: 'text' })
  description: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
