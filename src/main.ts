import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { DataSource } from 'typeorm'
import { Role } from './roles/entities/role.entity' // ✅ import Entity

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ เปิด CORS ที่นี่
  app.enableCors({
    origin: 'http://localhost:3001', // 👈 หรือพอร์ตที่ Nuxt ใช้อยู่ เช่น 3001
    credentials: true,               // ✅ หากคุณใช้ cookie หรือ Authorization header
  });

  const config = new DocumentBuilder()
    .setTitle('HRM API')
    .setDescription('API documentation for the HRM system')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);


  const dataSource = app.get(DataSource)
  const roleRepo = dataSource.getRepository(Role)

  const existingRoles = await roleRepo.count()
  if (existingRoles === 0) {
    await roleRepo.save([
      { id: 1, name: 'admin', description: 'ระบบแอดมิน' },
      { id: 2, name: 'manager', description: 'ผู้จัดการ' },
      { id: 3, name: 'employee', description: 'พนักงานทั่วไป' },
    ])
    console.log('✅ Seeded default roles.')
  }

  await app.listen(3000);
}
bootstrap();
