
// seed-payroll-details.ts
import { DataSource } from 'typeorm';
import { PayrollDetail, PayrollStatus, PaymentMethod } from '../entities/payroll-detail.entity';

export async function seedPayrollDetails(dataSource: DataSource) {
  const repo = dataSource.getRepository(PayrollDetail);
  const count = await repo.count();
  if (count > 0) return;

  await repo.save([
    {
      payroll: { id: 1 },
      employee: { id: 1 },
      basic_salary: 18000,
      gross_salary: 20000,
      total_deductions: 1500,
      net_salary: 18500,
      tax: 500,
      status: PayrollStatus.PAID,
      payment_method: PaymentMethod.BANK_TRANSFER,
      note: 'เงินเดือนเดือนพฤษภาคม'
    }
  ]);
}