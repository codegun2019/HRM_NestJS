
import { Injectable } from '@nestjs/common';

@Injectable()
export class RolesService {
  findAll() {
    return [{ id: 1, name: 'admin' }];
  }
}
