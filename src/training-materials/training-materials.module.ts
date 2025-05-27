import { Module } from '@nestjs/common';
import { TrainingMaterialsService } from './training-materials.service';
import { TrainingMaterialsController } from './training-materials.controller';

@Module({
  controllers: [TrainingMaterialsController],
  providers: [TrainingMaterialsService],
})
export class TrainingMaterialsModule {}
