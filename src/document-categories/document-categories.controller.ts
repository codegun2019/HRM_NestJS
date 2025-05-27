import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentCategoriesService } from './document-categories.service';
import { CreateDocumentCategoryDto } from './dto/create-document-category.dto';
import { UpdateDocumentCategoryDto } from './dto/update-document-category.dto';

@Controller('document-categories')
export class DocumentCategoriesController {
  constructor(private readonly documentCategoriesService: DocumentCategoriesService) {}

  @Post()
  create(@Body() createDocumentCategoryDto: CreateDocumentCategoryDto) {
    return this.documentCategoriesService.create(createDocumentCategoryDto);
  }

  @Get()
  findAll() {
    return this.documentCategoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentCategoriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentCategoryDto: UpdateDocumentCategoryDto) {
    return this.documentCategoriesService.update(+id, updateDocumentCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentCategoriesService.remove(+id);
  }
}
