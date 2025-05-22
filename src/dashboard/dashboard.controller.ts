import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../common/guards/roles.guard';
import { Roles } from '../common/decorators/roles.decorator';

@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('dashboard')
export class DashboardController {
  @Get()
  @Roles('admin') // ✅ admin เท่านั้น
  getAdminView() {
    return { message: 'Admin dashboard 🛠' };
  }

  @Get('hr')
  @Roles('hr') // ✅ HR เท่านั้น
  getHRView() {
    return { message: 'HR dashboard 👩‍💼' };
  }

  @Get('employee')
  @Roles('employee') // ✅ employee เท่านั้น
  getEmployeeView() {
    return { message: 'Employee dashboard 🧑‍💼' };
  }
}
