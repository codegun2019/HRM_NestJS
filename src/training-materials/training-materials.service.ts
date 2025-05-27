import { Injectable } from '@nestjs/common';
import { CreateTrainingMaterialDto } from './dto/create-training-material.dto';
import { UpdateTrainingMaterialDto } from './dto/update-training-material.dto';

@Injectable()
export class TrainingMaterialsService {
  create(createTrainingMaterialDto: CreateTrainingMaterialDto) {
    return 'This action adds a new trainingMaterial';
  }

  findAll() {
    return `This action returns all trainingMaterials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trainingMaterial`;
  }

  update(id: number, updateTrainingMaterialDto: UpdateTrainingMaterialDto) {
    return `This action updates a #${id} trainingMaterial`;
  }

  remove(id: number) {
    return `This action removes a #${id} trainingMaterial`;
  }
}
