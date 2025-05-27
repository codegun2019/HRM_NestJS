import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { User } from './entities/user.entity';
import { Role } from './entities/role.entity';
import { Permission } from './entities/permission.entity';
import { RolePermission } from './entities/role-permission.entity';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';

import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { RolesController } from './roles/roles.controller';
import { RolesService } from './roles/roles.service';

import { PermissionsController } from './permissions/permissions.controller';
import { PermissionsService } from './permissions/permissions.service';

import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

import { RolesGuard } from './common/guards/roles.guard';
import { DepartmentsModule } from './departments/departments.module';
import { PositionsModule } from './positions/positions.module';
import { EmployeesModule } from './employees/employees.module';
import { EmployeeDetailsModule } from './employee-details/employee-details.module';
import { EmployeeEducationModule } from './employee-education/employee-education.module';
import { EmployeeWorkHistoryModule } from './employee-work-history/employee-work-history.module';
import { ShiftsModule } from './shifts/shifts.module';
import { EmployeeShiftsModule } from './employee-shifts/employee-shifts.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hrm_nestjs',
      entities: [User, Role, Permission, RolePermission],
      synchronize: false, // ❌ ปิดการ sync schema อัตโนมัติ
    }),
    TypeOrmModule.forFeature([User, Role, Permission, RolePermission]),
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),
    DepartmentsModule,
    PositionsModule,
    EmployeesModule,
    EmployeeDetailsModule,
    EmployeeEducationModule,
    EmployeeWorkHistoryModule,
    ShiftsModule,
    EmployeeShiftsModule,
    AttendanceModule,
  ],
  controllers: [
    AuthController,
    UsersController,
    RolesController,
    PermissionsController,
    DashboardController,
  ],
  providers: [
    RolesGuard,
    AuthService,
    JwtStrategy,
    UsersService,
    RolesService,
    PermissionsService,
    DashboardService,
  ],
})
export class AppModule {}
