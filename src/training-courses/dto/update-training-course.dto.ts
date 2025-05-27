import { PartialType } from '@nestjs/swagger';
import { CreateTrainingCourseDto } from './create-training-course.dto';

export class UpdateTrainingCourseDto extends PartialType(CreateTrainingCourseDto) {}
