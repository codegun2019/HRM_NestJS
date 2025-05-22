
import { Injectable } from '@nestjs/common';

@Injectable()
export class PermissionsService {
  findAll() {
    return [{ id: 1, name: 'view_users' }];
  }
}
