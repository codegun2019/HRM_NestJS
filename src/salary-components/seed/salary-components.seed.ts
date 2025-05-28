
// seed/
import { DataSource } from 'typeorm';
import { SalaryComponent, SalaryComponentType } from '../entities/salary-component.entity';

export async function seedSalaryComponents(dataSource: DataSource) {
  const repo = dataSource.getRepository(SalaryComponent);

  const data = [
    { name: 'Basic Salary', type: SalaryComponentType.EARNING, is_taxable: true, is_fixed: true },
    { name: 'Transport Allowance', type: SalaryComponentType.EARNING, is_taxable: false, is_fixed: true },
    { name: 'Late Penalty', type: SalaryComponentType.DEDUCTION, is_taxable: false, is_fixed: false },
    { name: 'Social Security', type: SalaryComponentType.DEDUCTION, is_taxable: true, is_fixed: true },
  ];

  for (const item of data) {
    const exists = await repo.findOneBy({ name: item.name });
    if (!exists) await repo.save(repo.create(item));
  }
}