
// payroll/payroll.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payroll } from './entities/payroll.entity';
import { PayrollService } from './payroll.service';
import { PayrollController } from './payroll.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payroll])],
  controllers: [PayrollController],
  providers: [PayrollService],
})
export class PayrollModule {}