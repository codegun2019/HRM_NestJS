import { Module } from '@nestjs/common';
import { DocumentSharesService } from './document-shares.service';
import { DocumentSharesController } from './document-shares.controller';

@Module({
  controllers: [DocumentSharesController],
  providers: [DocumentSharesService],
})
export class DocumentSharesModule {}
