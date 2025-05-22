
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from './common/decorators/roles.decorator';
import { RolesGuard } from './common/guards/roles.guard';

@Controller('dashboard')
export class DashboardController {
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Get()
  getAdminData(@Request() req) {
    return {
      message: 'Welcome to admin dashboard',
      user: req.user,
    };
  }
}
