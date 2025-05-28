
// leave-types/seed/leave-types.seed.ts
import { DataSource } from 'typeorm';
import { LeaveType } from '../entities/leave-type.entity';

export async function seedLeaveTypes(dataSource: DataSource) {
  const repo = dataSource.getRepository(LeaveType);

  const types = [
    { name: 'Sick Leave', description: 'ลาป่วย', defaultDays: 30, requiresApproval: true },
    { name: 'Personal Leave', description: 'ลากิจส่วนตัว', defaultDays: 7, requiresApproval: true },
    { name: 'Vacation Leave', description: 'ลาพักร้อน', defaultDays: 10, requiresApproval: true },
    { name: 'Maternity Leave', description: 'ลาคลอด', defaultDays: 90, requiresApproval: true },
  ];

  for (const type of types) {
    const exists = await repo.findOneBy({ name: type.name });
    if (!exists) await repo.save(repo.create(type));
  }
}