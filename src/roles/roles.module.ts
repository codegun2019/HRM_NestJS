import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { Role } from '../entities/role.entity';
import { RolePermission } from '../entities/role-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Role, RolePermission])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
