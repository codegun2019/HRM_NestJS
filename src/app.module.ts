import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { PermissionsModule } from './permissions/permissions.module';

// @Module({
//   imports: [AuthModule, UsersModule, RolesModule, PermissionsModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
// src/app.module.ts


@Module({
  imports: [AuthModule, UsersModule, RolesModule, PermissionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hrm_nestjs',
      autoLoadEntities: true,
      synchronize: true,
    }),
    // ... other modules
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}