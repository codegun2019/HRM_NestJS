
import { Entity, ManyToOne, PrimaryColumn, CreateDateColumn } from 'typeorm';
import { Role } from '../entities/role.entity';
import { Permission } from '../entities/permission.entity';

@Entity('role_permissions')
export class RolePermission {
  @PrimaryColumn()
  role_id: number;

  @PrimaryColumn()
  permission_id: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => Role, role => role.rolePermissions, { onDelete: 'CASCADE' })
  role: Role

  @ManyToOne(() => Permission, permission => permission.rolePermissions, { onDelete: 'CASCADE' })
  permission: Permission
}
