
// job-postings.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobPosting } from './entities/job-posting.entity';
import { CreateJobPostingDto } from './dto/create-job-posting.dto';
import { UpdateJobPostingDto } from './dto/update-job-posting.dto';

@Injectable()
export class JobPostingsService {
  constructor(
    @InjectRepository(JobPosting)
    private repo: Repository<JobPosting>
  ) {}

  create(dto: CreateJobPostingDto) {
    const posting = this.repo.create({
      title: dto.title,
      position: { id: dto.position },
      department: { id: dto.department },
      description: dto.description,
      requirements: dto.requirements,
      status: dto.status,
      vacancies: dto.vacancies,
      posting_date: dto.posting_date,
      closing_date: dto.closing_date,
      created_by: { id: dto.created_by }
    });
    return this.repo.save(posting);
  }

  findAll() {
    return this.repo.find({ relations: ['position', 'department', 'created_by'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['position', 'department', 'created_by'] });
  }

  update(id: number, dto: UpdateJobPostingDto) {
    const partial: any = { ...dto };
    if (dto.position) partial.position = { id: dto.position };
    if (dto.department) partial.department = { id: dto.department };
    if (dto.created_by) partial.created_by = { id: dto.created_by };
    return this.repo.update(id, partial);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
