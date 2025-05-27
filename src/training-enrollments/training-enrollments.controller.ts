import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingEnrollmentsService } from './training-enrollments.service';
import { CreateTrainingEnrollmentDto } from './dto/create-training-enrollment.dto';
import { UpdateTrainingEnrollmentDto } from './dto/update-training-enrollment.dto';

@Controller('training-enrollments')
export class TrainingEnrollmentsController {
  constructor(private readonly trainingEnrollmentsService: TrainingEnrollmentsService) {}

  @Post()
  create(@Body() createTrainingEnrollmentDto: CreateTrainingEnrollmentDto) {
    return this.trainingEnrollmentsService.create(createTrainingEnrollmentDto);
  }

  @Get()
  findAll() {
    return this.trainingEnrollmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingEnrollmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingEnrollmentDto: UpdateTrainingEnrollmentDto) {
    return this.trainingEnrollmentsService.update(+id, updateTrainingEnrollmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingEnrollmentsService.remove(+id);
  }
}
