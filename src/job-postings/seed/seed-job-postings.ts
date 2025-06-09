// seed-job-postings.ts
import { DataSource } from 'typeorm';
import { JobPosting, JobPostingStatus } from '../entities/job-posting.entity';

export async function seedJobPostings(dataSource: DataSource) {
  const repo = dataSource.getRepository(JobPosting);
  const count = await repo.count();
  if (count > 0) return;

  await repo.save([
    {
      title: 'พนักงานต้อนรับ',
      position: { id: 1 },
      department: { id: 1 },
      description: 'ดูแลลูกค้าและบริการหน้าฟร้อนท์',
      requirements: 'บุคลิกดี พูดอังกฤษได้ดี',
      status: JobPostingStatus.OPEN,
      vacancies: 2,
      posting_date: '2025-05-01',
      closing_date: '2025-06-01',
      created_by: { id: 1 }
    }
  ]);
}