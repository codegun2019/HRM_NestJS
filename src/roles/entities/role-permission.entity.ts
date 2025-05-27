import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Role } from './role.entity'

@Entity('role_permissions')
export class RolePermission {
  @PrimaryColumn()
  role_id: number

  @PrimaryColumn()
  permission_id: number

  @ManyToOne(() => Role, role => role.rolePermissions)
  @JoinColumn({ name: 'role_id' })
  role: Role
}
