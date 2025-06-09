// candidate.entity.ts
import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn
} from 'typeorm';

export enum CandidateStatus {
  NEW = 'new',
  SCREENING = 'screening',
  INTERVIEW = 'interview',
  OFFERED = 'offered',
  HIRED = 'hired',
  REJECTED = 'rejected'
}

@Entity('candidates')
export class Candidate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  first_name: string;

  @Column({ length: 100 })
  last_name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 20, nullable: true })
  phone?: string;

  @Column({ length: 255, nullable: true })
  resume_url?: string;

  @Column({ length: 255, nullable: true })
  cover_letter_url?: string;

  @Column({ type: 'enum', enum: CandidateStatus, default: CandidateStatus.NEW })
  status: CandidateStatus;

  @Column({ length: 100, nullable: true })
  source?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}