import 'dotenv/config'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // ✅ Enable CORS
  app.enableCors({
    origin: 'http://localhost:3001', // frontend port
    credentials: true,               // cookie & auth header
  })

  // ✅ Swagger Config
  const config = new DocumentBuilder()
    .setTitle('HRM API')
    .setDescription('API documentation for the HRM system')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  // ✅ Start app
  await app.listen(3000)
  console.log(`🚀 Application is running on: http://localhost:3000`)
}
bootstrap()
