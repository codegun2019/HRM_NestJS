
// create-job-posting.dto.ts
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';
import { JobPostingStatus } from '../entities/job-posting.entity';

export class CreateJobPostingDto {
  @IsString()
  title: string;

  @IsNotEmpty()
  position: number;

  @IsNotEmpty()
  department: number;

  @IsString()
  description: string;

  @IsString()
  requirements: string;

  @IsEnum(JobPostingStatus)
  @IsOptional()
  status?: JobPostingStatus;

  @IsInt()
  @IsOptional()
  vacancies?: number;

  @IsOptional()
  posting_date?: string;

  @IsOptional()
  closing_date?: string;

  @IsNotEmpty()
  created_by: number;
}
