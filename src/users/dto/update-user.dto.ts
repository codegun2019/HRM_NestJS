export class UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
  role_id?: number | string;
  is_active?: boolean;
  last_login?: Date;
}
