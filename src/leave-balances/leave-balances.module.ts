
// leave-balances/leave-balances.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveBalancesService } from './leave-balances.service';
import { LeaveBalancesController } from './leave-balances.controller';
import { LeaveBalance } from './entities/leave-balance.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LeaveBalance])],
  controllers: [LeaveBalancesController],
  providers: [LeaveBalancesService],
})
export class LeaveBalancesModule {}
