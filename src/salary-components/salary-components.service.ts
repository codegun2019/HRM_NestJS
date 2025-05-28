// salary-components/salary-components.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalaryComponent } from './entities/salary-component.entity';
import { CreateSalaryComponentDto } from './dto/create-salary-component.dto';
import { UpdateSalaryComponentDto } from './dto/update-salary-component.dto';

@Injectable()
export class SalaryComponentsService {
  constructor(
    @InjectRepository(SalaryComponent)
    private readonly repo: Repository<SalaryComponent>,
  ) {}

  create(dto: CreateSalaryComponentDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateSalaryComponentDto) {
    await this.repo.update(id, dto);
    return this.repo.findOneBy({ id });
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}