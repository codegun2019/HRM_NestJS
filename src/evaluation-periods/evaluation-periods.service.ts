import { Injectable } from '@nestjs/common';
import { CreateEvaluationPeriodDto } from './dto/create-evaluation-period.dto';
import { UpdateEvaluationPeriodDto } from './dto/update-evaluation-period.dto';

@Injectable()
export class EvaluationPeriodsService {
  create(createEvaluationPeriodDto: CreateEvaluationPeriodDto) {
    return 'This action adds a new evaluationPeriod';
  }

  findAll() {
    return `This action returns all evaluationPeriods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluationPeriod`;
  }

  update(id: number, updateEvaluationPeriodDto: UpdateEvaluationPeriodDto) {
    return `This action updates a #${id} evaluationPeriod`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluationPeriod`;
  }
}
