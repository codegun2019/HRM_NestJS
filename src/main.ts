import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

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

  await app.listen(3000);
}
bootstrap();
