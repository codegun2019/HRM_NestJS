import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Role } from '../entities/role.entity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true })
  username: string

  @Column({ unique: true })
  email: string

  @Column()
  password: string

  @Column()
  role_id: number

  @ManyToOne(() => Role, role => role.users, { eager: true, nullable: true })
  @JoinColumn({ name: 'role_id' })
  role: Partial<Role> | null // ✅ ใช้ Partial แก้ error type mismatch

  @Column({ default: true })
  is_active: boolean

  @Column({ type: 'datetime', nullable: true })
  last_login: Date

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
