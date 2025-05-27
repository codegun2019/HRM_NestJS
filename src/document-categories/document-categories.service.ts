import { Injectable } from '@nestjs/common';
import { CreateDocumentCategoryDto } from './dto/create-document-category.dto';
import { UpdateDocumentCategoryDto } from './dto/update-document-category.dto';

@Injectable()
export class DocumentCategoriesService {
  create(createDocumentCategoryDto: CreateDocumentCategoryDto) {
    return 'This action adds a new documentCategory';
  }

  findAll() {
    return `This action returns all documentCategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentCategory`;
  }

  update(id: number, updateDocumentCategoryDto: UpdateDocumentCategoryDto) {
    return `This action updates a #${id} documentCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentCategory`;
  }
}
