import { PartialType } from '@nestjs/swagger';
import { CreateEvaluationRatingDto } from './create-evaluation-rating.dto';

export class UpdateEvaluationRatingDto extends PartialType(CreateEvaluationRatingDto) {}
