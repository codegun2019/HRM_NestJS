import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationPeriodsService } from './evaluation-periods.service';
import { CreateEvaluationPeriodDto } from './dto/create-evaluation-period.dto';
import { UpdateEvaluationPeriodDto } from './dto/update-evaluation-period.dto';

@Controller('evaluation-periods')
export class EvaluationPeriodsController {
  constructor(private readonly evaluationPeriodsService: EvaluationPeriodsService) {}

  @Post()
  create(@Body() createEvaluationPeriodDto: CreateEvaluationPeriodDto) {
    return this.evaluationPeriodsService.create(createEvaluationPeriodDto);
  }

  @Get()
  findAll() {
    return this.evaluationPeriodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationPeriodsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationPeriodDto: UpdateEvaluationPeriodDto) {
    return this.evaluationPeriodsService.update(+id, updateEvaluationPeriodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationPeriodsService.remove(+id);
  }
}
