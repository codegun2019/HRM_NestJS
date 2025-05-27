import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationCriteriaService } from './evaluation-criteria.service';
import { CreateEvaluationCriterionDto } from './dto/create-evaluation-criterion.dto';
import { UpdateEvaluationCriterionDto } from './dto/update-evaluation-criterion.dto';

@Controller('evaluation-criteria')
export class EvaluationCriteriaController {
  constructor(private readonly evaluationCriteriaService: EvaluationCriteriaService) {}

  @Post()
  create(@Body() createEvaluationCriterionDto: CreateEvaluationCriterionDto) {
    return this.evaluationCriteriaService.create(createEvaluationCriterionDto);
  }

  @Get()
  findAll() {
    return this.evaluationCriteriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationCriteriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationCriterionDto: UpdateEvaluationCriterionDto) {
    return this.evaluationCriteriaService.update(+id, updateEvaluationCriterionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationCriteriaService.remove(+id);
  }
}
