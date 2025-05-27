import { Injectable } from '@nestjs/common';
import { CreatePerformanceEvaluationDto } from './dto/create-performance-evaluation.dto';
import { UpdatePerformanceEvaluationDto } from './dto/update-performance-evaluation.dto';

@Injectable()
export class PerformanceEvaluationsService {
  create(createPerformanceEvaluationDto: CreatePerformanceEvaluationDto) {
    return 'This action adds a new performanceEvaluation';
  }

  findAll() {
    return `This action returns all performanceEvaluations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} performanceEvaluation`;
  }

  update(id: number, updatePerformanceEvaluationDto: UpdatePerformanceEvaluationDto) {
    return `This action updates a #${id} performanceEvaluation`;
  }

  remove(id: number) {
    return `This action removes a #${id} performanceEvaluation`;
  }
}
