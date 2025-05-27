import { Injectable } from '@nestjs/common';
import { CreateEvaluationCriterionDto } from './dto/create-evaluation-criterion.dto';
import { UpdateEvaluationCriterionDto } from './dto/update-evaluation-criterion.dto';

@Injectable()
export class EvaluationCriteriaService {
  create(createEvaluationCriterionDto: CreateEvaluationCriterionDto) {
    return 'This action adds a new evaluationCriterion';
  }

  findAll() {
    return `This action returns all evaluationCriteria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluationCriterion`;
  }

  update(id: number, updateEvaluationCriterionDto: UpdateEvaluationCriterionDto) {
    return `This action updates a #${id} evaluationCriterion`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluationCriterion`;
  }
}
