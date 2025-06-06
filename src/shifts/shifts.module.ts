// src/shifts/shifts.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ShiftsService } from './shifts.service'
import { ShiftsController } from './shifts.controller'
import { Shift } from './entities/shift.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Shift])],
  controllers: [ShiftsController],
  providers: [ShiftsService],
})
export class ShiftsModule {}
