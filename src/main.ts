import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger'; //used for generating API document
dotenv.config();

async function bootstrap() {
  console.log('Start:')
  console.log('Loaded DATABASE:', process.env.DB_NAME);
  console.log('Environment:',process.env.NODE_ENV)

  const app = await NestFactory.create(AppModule);

  /// generate API
  const config = new DocumentBuilder()
        .setTitle('API Documentation')
        .setDescription('The API description')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  ///

  app.enableCors({
    origin: ['http://localhost:5173'], // 替换为你的前端地址
    credentials: true, // 允许跨域传递 cookie
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
