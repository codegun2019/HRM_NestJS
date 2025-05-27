import { PartialType } from '@nestjs/swagger';
import { CreateTrainingEnrollmentDto } from './create-training-enrollment.dto';

export class UpdateTrainingEnrollmentDto extends PartialType(CreateTrainingEnrollmentDto) {}
