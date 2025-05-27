import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EvaluationRatingsService } from './evaluation-ratings.service';
import { CreateEvaluationRatingDto } from './dto/create-evaluation-rating.dto';
import { UpdateEvaluationRatingDto } from './dto/update-evaluation-rating.dto';

@Controller('evaluation-ratings')
export class EvaluationRatingsController {
  constructor(private readonly evaluationRatingsService: EvaluationRatingsService) {}

  @Post()
  create(@Body() createEvaluationRatingDto: CreateEvaluationRatingDto) {
    return this.evaluationRatingsService.create(createEvaluationRatingDto);
  }

  @Get()
  findAll() {
    return this.evaluationRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.evaluationRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEvaluationRatingDto: UpdateEvaluationRatingDto) {
    return this.evaluationRatingsService.update(+id, updateEvaluationRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.evaluationRatingsService.remove(+id);
  }
}
