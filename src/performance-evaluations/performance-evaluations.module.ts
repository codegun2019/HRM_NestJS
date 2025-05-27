import { Module } from '@nestjs/common';
import { PerformanceEvaluationsService } from './performance-evaluations.service';
import { PerformanceEvaluationsController } from './performance-evaluations.controller';

@Module({
  controllers: [PerformanceEvaluationsController],
  providers: [PerformanceEvaluationsService],
})
export class PerformanceEvaluationsModule {}
