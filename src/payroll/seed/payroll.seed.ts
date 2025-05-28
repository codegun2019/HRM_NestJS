
// seed/payroll.seed.ts
import { DataSource } from 'typeorm';
import { Payroll, PayrollStatus } from '../entities/payroll.entity';

export async function seedPayroll(dataSource: DataSource) {
  const repo = dataSource.getRepository(Payroll);

  const data = [
    {
      payroll_period_start: '2024-05-01',
      payroll_period_end: '2024-05-31',
      payment_date: '2024-06-01',
      status: PayrollStatus.COMPLETED,
      createdBy: { id: 1 },
    },
    {
      payroll_period_start: '2024-06-01',
      payroll_period_end: '2024-06-30',
      payment_date: '2024-07-01',
      status: PayrollStatus.DRAFT,
      createdBy: { id: 2 },
    },
  ];

  for (const item of data) {
    const exists = await repo.findOne({ where: { payroll_period_start: item.payroll_period_start } });
    if (!exists) await repo.save(repo.create(item));
  }
}
