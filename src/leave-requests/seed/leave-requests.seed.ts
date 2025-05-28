
// seed/leave-requests.seed.ts
import { DataSource } from 'typeorm';
import { LeaveRequest, LeaveRequestStatus } from '../entities/leave-request.entity';
export async function seedLeaveRequests(dataSource: DataSource) {
  const repo = dataSource.getRepository(LeaveRequest);

  const data = [
    {
      employee: { id: 1 },
      leaveType: { id: 1 },
      start_date: '2024-06-01',
      end_date: '2024-06-05',
      days: 5,
      reason: 'ลาพักร้อนกับครอบครัว',
      status: LeaveRequestStatus.APPROVED,
      approvedBy: { id: 3 },
    },
    {
      employee: { id: 2 },
      leaveType: { id: 2 },
      start_date: '2024-06-10',
      end_date: '2024-06-12',
      days: 3,
      reason: 'ลาป่วย',
      status: LeaveRequestStatus.PENDING,
    },
  ];

  for (const item of data) {
    const exists = await repo.findOne({ where: { employee: { id: item.employee.id }, start_date: item.start_date } });
    if (!exists) await repo.save(repo.create(item));
  }
}