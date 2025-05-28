
// salary-components/salary-components.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryComponent } from './entities/salary-component.entity';
import { SalaryComponentsService } from './salary-components.service';
import { SalaryComponentsController } from './salary-components.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalaryComponent])],
  controllers: [SalaryComponentsController],
  providers: [SalaryComponentsService],
})
export class SalaryComponentsModule {}
