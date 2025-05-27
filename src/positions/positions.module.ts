// src/positions/positions.module.ts
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PositionsService } from './positions.service'
import { PositionsController } from './positions.controller'
import { Position } from './entities/position.entity'
import { Department } from 'src/departments/entities/department.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Position, Department])],
  controllers: [PositionsController],
  providers: [PositionsService],
})
export class PositionsModule {}
