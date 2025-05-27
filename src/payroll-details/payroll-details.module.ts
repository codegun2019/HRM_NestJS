import { Module } from '@nestjs/common';
import { PayrollDetailsService } from './payroll-details.service';
import { PayrollDetailsController } from './payroll-details.controller';

@Module({
  controllers: [PayrollDetailsController],
  providers: [PayrollDetailsService],
})
export class PayrollDetailsModule {}
