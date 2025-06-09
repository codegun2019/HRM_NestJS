
// payroll-details.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayrollDetailsService } from './payroll-details.service';
import { PayrollDetailsController } from './payroll-details.controller';
import { PayrollDetail } from './entities/payroll-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PayrollDetail])],
  controllers: [PayrollDetailsController],
  providers: [PayrollDetailsService]
})
export class PayrollDetailsModule {}