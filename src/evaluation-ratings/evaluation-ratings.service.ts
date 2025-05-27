import { Injectable } from '@nestjs/common';
import { CreateEvaluationRatingDto } from './dto/create-evaluation-rating.dto';
import { UpdateEvaluationRatingDto } from './dto/update-evaluation-rating.dto';

@Injectable()
export class EvaluationRatingsService {
  create(createEvaluationRatingDto: CreateEvaluationRatingDto) {
    return 'This action adds a new evaluationRating';
  }

  findAll() {
    return `This action returns all evaluationRatings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} evaluationRating`;
  }

  update(id: number, updateEvaluationRatingDto: UpdateEvaluationRatingDto) {
    return `This action updates a #${id} evaluationRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} evaluationRating`;
  }
}
