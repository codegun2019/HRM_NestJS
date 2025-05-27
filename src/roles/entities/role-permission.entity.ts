import {
  Entity,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Role } from './role.entity'
import { Permission } from './permission.entity'

@Entity('role_permissions')
export class RolePermission {
  @PrimaryColumn()
  role_id: number

  @PrimaryColumn()
  permission_id: number

  // 🔗 ความสัมพันธ์กับ Role
  @ManyToOne(() => Role, role => role.rolePermissions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'role_id' })
  role: Role

  // 🔗 ความสัมพันธ์กับ Permission
  @ManyToOne(() => Permission, permission => permission.rolePermissions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'permission_id' })
  permission: Permission
}
