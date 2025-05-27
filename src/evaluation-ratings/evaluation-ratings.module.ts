import { Module } from '@nestjs/common';
import { EvaluationRatingsService } from './evaluation-ratings.service';
import { EvaluationRatingsController } from './evaluation-ratings.controller';

@Module({
  controllers: [EvaluationRatingsController],
  providers: [EvaluationRatingsService],
})
export class EvaluationRatingsModule {}
