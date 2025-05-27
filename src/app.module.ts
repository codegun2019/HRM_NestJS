import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

// 👇 Entity ทั้งหมดต้อง Import ให้ครบ
import { User } from './users/entities/user.entity'
import { Role } from './roles/entities/role.entity'
import { Permission } from './roles/entities/permission.entity'
import { RolePermission } from './roles/entities/role-permission.entity'
import { Department } from './departments/entities/department.entity'
import { Position } from './positions/entities/position.entity'
import { Employee } from './employees/entities/employee.entity'
import { EmployeeDetail } from './employee-details/entities/employee-detail.entity'
import { EmployeeEducation } from './employee-education/entities/employee-education.entity'
import { EmployeeWorkHistory } from './employee-work-history/entities/employee-work-history.entity'
import { Shift } from './shifts/entities/shift.entity'
import { EmployeeShift } from './employee-shifts/entities/employee-shift.entity'
import { Attendance } from './attendance/entities/attendance.entity'

import { AuthController } from './auth/auth.controller'
import { AuthService } from './auth/auth.service'
import { JwtStrategy } from './auth/jwt.strategy'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { RolesController } from './roles/roles.controller'
import { RolesService } from './roles/roles.service'
import { PermissionsController } from './roles/permissions.controller'
import { PermissionsService } from './roles/permissions.service'
import { DashboardController } from './dashboard/dashboard.controller'
import { DashboardService } from './dashboard/dashboard.service'
import { RolesGuard } from './common/guards/roles.guard'

// 👇 Submodules
import { DepartmentsModule } from './departments/departments.module'
import { PositionsModule } from './positions/positions.module'
import { EmployeesModule } from './employees/employees.module'
import { EmployeeDetailsModule } from './employee-details/employee-details.module'
import { EmployeeEducationModule } from './employee-education/employee-education.module'
import { EmployeeWorkHistoryModule } from './employee-work-history/employee-work-history.module'
import { ShiftsModule } from './shifts/shifts.module'
import { EmployeeShiftsModule } from './employee-shifts/employee-shifts.module'
import { AttendanceModule } from './attendance/attendance.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hrm_nestjs_v2',
      synchronize: true, // ✅ เปิดสร้าง schema
      autoLoadEntities: true, // ✅ ทำให้ไม่ต้องใส่ entity ใน entities: []
    }),

    TypeOrmModule.forFeature([
      User,
      Role,
      Permission,
      RolePermission,
      Department,
      Position,
      Employee,
      EmployeeDetail,
      EmployeeEducation,
      EmployeeWorkHistory,
      Shift,
      EmployeeShift,
      Attendance,
    ]),

    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '1h' },
    }),

    // Submodules
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
