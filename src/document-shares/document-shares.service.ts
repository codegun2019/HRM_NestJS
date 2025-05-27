import { Injectable } from '@nestjs/common';
import { CreateDocumentShareDto } from './dto/create-document-share.dto';
import { UpdateDocumentShareDto } from './dto/update-document-share.dto';

@Injectable()
export class DocumentSharesService {
  create(createDocumentShareDto: CreateDocumentShareDto) {
    return 'This action adds a new documentShare';
  }

  findAll() {
    return `This action returns all documentShares`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentShare`;
  }

  update(id: number, updateDocumentShareDto: UpdateDocumentShareDto) {
    return `This action updates a #${id} documentShare`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentShare`;
  }
}
