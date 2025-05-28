// seedห/leave-balances.seed.ts
import { DataSource } from 'typeorm';
import { LeaveBalance } from '../entities/leave-balance.entity';

export async function seedLeaveBalances(dataSource: DataSource) {
  const repo = dataSource.getRepository(LeaveBalance);

  const records = [
    { employee: { id: 1 }, leaveType: { id: 1 }, year: 2024, total_days: 10, used_days: 2, remaining_days: 8 },
    { employee: { id: 2 }, leaveType: { id: 1 }, year: 2024, total_days: 10, used_days: 5, remaining_days: 5 },
  ];

  for (const data of records) {
    const exists = await repo.findOne({ where: { employee: { id: data.employee.id }, leaveType: { id: data.leaveType.id }, year: data.year } });
    if (!exists) await repo.save(repo.create(data));
  }
}
