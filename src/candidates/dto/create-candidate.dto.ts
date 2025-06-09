
// create-candidate.dto.ts
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { CandidateStatus } from '../entities/candidate.entity';

export class CreateCandidateDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  resume_url?: string;

  @IsOptional()
  @IsString()
  cover_letter_url?: string;

  @IsOptional()
  @IsEnum(CandidateStatus)
  status?: CandidateStatus;

  @IsOptional()
  @IsString()
  source?: string;
}
