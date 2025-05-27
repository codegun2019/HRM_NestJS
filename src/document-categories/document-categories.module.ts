import { Module } from '@nestjs/common';
import { DocumentCategoriesService } from './document-categories.service';
import { DocumentCategoriesController } from './document-categories.controller';

@Module({
  controllers: [DocumentCategoriesController],
  providers: [DocumentCategoriesService],
})
export class DocumentCategoriesModule {}
