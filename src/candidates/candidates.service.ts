
// candidates.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Candidate } from './entities/candidate.entity';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidatesService {
  constructor(
    @InjectRepository(Candidate)
    private repo: Repository<Candidate>
  ) {}

  create(dto: CreateCandidateDto) {
    const candidate = this.repo.create(dto);
    return this.repo.save(candidate);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, dto: UpdateCandidateDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
