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
    origin: 'http://localhost:4000', // 替换为你的前端地址
    credentials: true, // 允许跨域传递 cookie
  });

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    if (req.method === 'OPTIONS') {
      res.sendStatus(204); // 直接响应预检请求
    } 
    next();
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
