
// seedหำse/employee-salary-components.seed.ts
import { DataSource } from 'typeorm';
import { EmployeeSalaryComponent } from '../entities/employee-salary-component.entity';

export async function seedEmployeeSalaryComponents(dataSource: DataSource) {
  const repo = dataSource.getRepository(EmployeeSalaryComponent);

  const data = [
    { employee: { id: 1 }, component: { id: 1 }, amount: 15000, effective_date: '2024-01-01' },
    { employee: { id: 1 }, component: { id: 2 }, amount: 1000, effective_date: '2024-01-01' },
    { employee: { id: 2 }, component: { id: 1 }, amount: 13000, effective_date: '2024-01-01' },
  ];

  for (const item of data) {
    const exists = await repo.findOne({
      where: {
        employee: { id: item.employee.id },
        component: { id: item.component.id },
        effective_date: item.effective_date,
      },
    });
    if (!exists) await repo.save(repo.create(item));
  }
}
