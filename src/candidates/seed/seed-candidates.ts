
// seed-candidates.ts
import { DataSource } from 'typeorm';
import { Candidate, CandidateStatus } from '../entities/candidate.entity';

export async function seedCandidates(dataSource: DataSource) {
  const repo = dataSource.getRepository(Candidate);
  const count = await repo.count();
  if (count > 0) return;

  await repo.save([
    {
      first_name: 'อนุชา',
      last_name: 'ใจดี',
      email: 'anucha@example.com',
      phone: '0812345678',
      resume_url: 'https://example.com/resume.pdf',
      cover_letter_url: 'https://example.com/cover-letter.pdf',
      status: CandidateStatus.SCREENING,
      source: 'JobThai'
    }
  ]);
}
