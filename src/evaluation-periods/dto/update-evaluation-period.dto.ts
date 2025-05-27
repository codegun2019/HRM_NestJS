import { PartialType } from '@nestjs/swagger';
import { CreateEvaluationPeriodDto } from './create-evaluation-period.dto';

export class UpdateEvaluationPeriodDto extends PartialType(CreateEvaluationPeriodDto) {}
