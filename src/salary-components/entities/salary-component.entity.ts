// salary-components/entities/salary-component.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum SalaryComponentType {
  EARNING = 'earning',
  DEDUCTION = 'deduction',
}

@Entity('salary_components')
export class SalaryComponent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: SalaryComponentType,
  })
  type: SalaryComponentType;

  @Column({ default: false })
  is_taxable: boolean;

  @Column({ default: true })
  is_fixed: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
