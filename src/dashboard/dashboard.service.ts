
import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  getStats() {
    return { users: 100, roles: 3 };
  }
}
