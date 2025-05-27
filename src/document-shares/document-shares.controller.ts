import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DocumentSharesService } from './document-shares.service';
import { CreateDocumentShareDto } from './dto/create-document-share.dto';
import { UpdateDocumentShareDto } from './dto/update-document-share.dto';

@Controller('document-shares')
export class DocumentSharesController {
  constructor(private readonly documentSharesService: DocumentSharesService) {}

  @Post()
  create(@Body() createDocumentShareDto: CreateDocumentShareDto) {
    return this.documentSharesService.create(createDocumentShareDto);
  }

  @Get()
  findAll() {
    return this.documentSharesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentSharesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentShareDto: UpdateDocumentShareDto) {
    return this.documentSharesService.update(+id, updateDocumentShareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentSharesService.remove(+id);
  }
}
