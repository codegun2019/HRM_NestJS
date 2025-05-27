import { Module } from '@nestjs/common';
import { TrainingEnrollmentsService } from './training-enrollments.service';
import { TrainingEnrollmentsController } from './training-enrollments.controller';

@Module({
  controllers: [TrainingEnrollmentsController],
  providers: [TrainingEnrollmentsService],
})
export class TrainingEnrollmentsModule {}
