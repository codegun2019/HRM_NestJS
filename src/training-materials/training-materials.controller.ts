import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrainingMaterialsService } from './training-materials.service';
import { CreateTrainingMaterialDto } from './dto/create-training-material.dto';
import { UpdateTrainingMaterialDto } from './dto/update-training-material.dto';

@Controller('training-materials')
export class TrainingMaterialsController {
  constructor(private readonly trainingMaterialsService: TrainingMaterialsService) {}

  @Post()
  create(@Body() createTrainingMaterialDto: CreateTrainingMaterialDto) {
    return this.trainingMaterialsService.create(createTrainingMaterialDto);
  }

  @Get()
  findAll() {
    return this.trainingMaterialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainingMaterialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainingMaterialDto: UpdateTrainingMaterialDto) {
    return this.trainingMaterialsService.update(+id, updateTrainingMaterialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainingMaterialsService.remove(+id);
  }
}
