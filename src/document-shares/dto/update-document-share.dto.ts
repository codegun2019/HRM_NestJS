import { PartialType } from '@nestjs/swagger';
import { CreateDocumentShareDto } from './create-document-share.dto';

export class UpdateDocumentShareDto extends PartialType(CreateDocumentShareDto) {}
