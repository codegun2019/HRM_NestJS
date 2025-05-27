import { Module } from '@nestjs/common';
import { TrainingCoursesService } from './training-courses.service';
import { TrainingCoursesController } from './training-courses.controller';

@Module({
  controllers: [TrainingCoursesController],
  providers: [TrainingCoursesService],
})
export class TrainingCoursesModule {}
