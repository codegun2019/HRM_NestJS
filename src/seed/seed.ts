import 'dotenv/config'
import { DataSource } from 'typeorm'
import * as bcrypt from 'bcrypt'

// ENTITY
import { Role } from '../roles/entities/role.entity'
import { Permission } from '../roles/entities/permission.entity'
import { RolePermission } from '../roles/entities/role-permission.entity'
import { User } from '../users/entities/user.entity'
import { Department } from '../departments/entities/department.entity'
import { Position } from '../positions/entities/position.entity'
import { Employee } from '../employees/entities/employee.entity'
import { EmployeeDetail } from '../employee-details/entities/employee-detail.entity'
import { EmployeeEducation } from '../employee-education/entities/employee-education.entity'
import { EmployeeWorkHistory } from '../employee-work-history/entities/employee-work-history.entity'
import { Shift } from '../shifts/entities/shift.entity'
import { EmployeeShift } from '../employee-shifts/entities/employee-shift.entity'
import { Attendance } from '../attendance/entities/attendance.entity'

const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || 'root',
  database: process.env.DB_NAME || 'hrm_nestjs_v2',
  entities: [
    Role, Permission, RolePermission, User,
    Department, Position, Employee, EmployeeDetail,
    EmployeeEducation, EmployeeWorkHistory,
    Shift, EmployeeShift, Attendance
  ],
  synchronize: true,
})

async function seed() {
  await AppDataSource.initialize()
  console.log('🚀 เริ่ม Seed...')

  const roleRepo = AppDataSource.getRepository(Role)
  const permissionRepo = AppDataSource.getRepository(Permission)
  const rolePermissionRepo = AppDataSource.getRepository(RolePermission)
  const userRepo = AppDataSource.getRepository(User)
  const deptRepo = AppDataSource.getRepository(Department)
  const posRepo = AppDataSource.getRepository(Position)
  const empRepo = AppDataSource.getRepository(Employee)
  const detailRepo = AppDataSource.getRepository(EmployeeDetail)
  const eduRepo = AppDataSource.getRepository(EmployeeEducation)
  const workRepo = AppDataSource.getRepository(EmployeeWorkHistory)
  const shiftRepo = AppDataSource.getRepository(Shift)
  const empShiftRepo = AppDataSource.getRepository(EmployeeShift)
  const attRepo = AppDataSource.getRepository(Attendance)


  // ใช้เฉพาะกับ dev database เท่านั้น ‼️ ห้ามใช้กับ production ❌
  await AppDataSource.query('SET FOREIGN_KEY_CHECKS = 0')
  await AppDataSource.query('TRUNCATE TABLE users')
  await AppDataSource.query('TRUNCATE TABLE roles')
  await AppDataSource.query('TRUNCATE TABLE permissions')
  // 🔁 ...ต่อจนครบทุก table ที่คุณ seed
  await AppDataSource.query('SET FOREIGN_KEY_CHECKS = 1')
  // ใช้เฉพาะกับ dev database เท่านั้น ‼️ ห้ามใช้กับ production ❌
  // ===== Role =====
  const [adminRole, managerRole, staffRole] = await roleRepo.save([
    { id: 1, name: 'admin', description: 'ผู้ดูแลระบบ' },
    { id: 2, name: 'manager', description: 'หัวหน้าแผนก' },
    { id: 3, name: 'staff', description: 'พนักงานทั่วไป' },
  ])

  // ===== User =====
  const adminPassword = await bcrypt.hash('admin1234', 10)
  const adminUser = await userRepo.save({
    username: 'admin',
    email: 'admin@hotel.com',
    password: adminPassword,
    role_id: adminRole.id,
  })

  // ===== Department =====
  const [frontDesk, housekeeping, kitchen, maintenance] = await deptRepo.save([
    { name: 'แผนกต้อนรับ', thai_name: 'แผนกต้อนรับ', description: 'ดูแลการต้อนรับลูกค้า' },
    { name: 'แผนกแม่บ้าน', thai_name: 'แผนกแม่บ้าน', description: 'ดูแลความสะอาด' },
    { name: 'แผนกครัว', thai_name: 'แผนกครัว', description: 'จัดเตรียมอาหาร' },
    { name: 'แผนกช่าง', thai_name: 'แผนกช่าง', description: 'ดูแลซ่อมบำรุง' },
  ])

  // ===== Position =====
  const [receptionist, housekeeper, chef, technician] = await posRepo.save([
    { title: 'Receptionist', thai_title: 'พนักงานต้อนรับ', description: '', department: frontDesk },
    { title: 'Housekeeper', thai_title: 'แม่บ้าน', description: '', department: housekeeping },
    { title: 'Chef', thai_title: 'เชฟ', description: '', department: kitchen },
    { title: 'Technician', thai_title: 'ช่างซ่อมบำรุง', description: '', department: maintenance },
  ])

  // ===== Employee =====
  const emp1 = await empRepo.save({
    employee_id: 'HT001',
    user: adminUser,
    first_name: 'Somsak',
    last_name: 'Chaiyo',
    thai_first_name: 'สมศักดิ์',
    thai_last_name: 'ไชโย',
    email: 'somsak@hotel.com',
    phone: '0899999999',
    position: receptionist,
    department: frontDesk,
    profile_image: '',
    status: 'active',
  })

  // ===== Employee Detail =====
  await detailRepo.save({
    employee: emp1,
    date_of_birth: '1985-01-01',
    gender: 'male',
    marital_status: 'married',
    nationality: 'ไทย',
    id_card_number: '1234567890123',
    tax_id: '1111111111',
    address: '123 ถนนสุขุมวิท กรุงเทพฯ',
  })

  // ===== Education =====
  await eduRepo.save({
    employee: emp1,
    institution: 'มหาวิทยาลัยธรรมศาสตร์',
    degree: 'ปริญญาตรี',
    field_of_study: 'การโรงแรม',
    start_date: '2002-06-01',
    end_date: '2006-03-31',
  })

  // ===== Work History =====
  await workRepo.save({
    employee: emp1,
    company_name: 'โรงแรม A',
    position: 'Receptionist',
    start_date: '2008-01-01',
    end_date: '2015-01-01',
    responsibilities: 'ดูแลการเช็คอิน เช็คเอาท์',
  })

  // ===== Shift =====
  const shift = await shiftRepo.save({
    name: 'กะเช้า',
    start_time: '07:00:00',
    end_time: '15:00:00',
  })

  // ===== Employee Shift =====
  await empShiftRepo.save({
    employee: emp1,
    shift,
    effective_date: new Date().toISOString(),
  })

  // ===== Attendance =====
  await attRepo.save({
    employee: emp1,
    date: new Date().toISOString().split('T')[0],
    time_in: new Date(),
    status: 'present',
  })

  console.log('✅ Seed เสร็จสมบูรณ์แล้ว 🎉')
  process.exit()
}

seed()
