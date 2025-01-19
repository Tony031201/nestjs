import { Module,MiddlewareConsumer, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConversationModule } from './conversation/conversation.module';
import { HistoryModule } from './history/history.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { User } from './user/user.entity';
import { History } from './history/history.entity';
const cookieSession = require('cookie-session')
const dbConfig = require('../ormconfig.js');
import { TypeOrmConfigService } from './config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:`.env.${process.env.NODE_ENV}`,
    }),
    UserModule, 
    ConversationModule, 
    HistoryModule,
    // TypeOrmModule.forRootAsync({
    //   inject:[ConfigService],
    //   useFactory:(config:ConfigService)=>{
    //     console.log('DB_NAME:', config.get<string>('DB_NAME')); // 打印 DB_NAME
    //     return {
    //       type:'sqlite',
    //       database:config.get<string>('DB_NAME'),
    //       entities:[User,History],
    //       synchronize:true
    //     }
    //   }
    // })
    TypeOrmModule.forRoot(dbConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  constructor(private configServer:ConfigService){}

  configure(consumer:MiddlewareConsumer){
    consumer.apply(cookieSession({
      keys:[this.configServer.get('COOKIE_KEY')]
    })).forRoutes('*')
  }
}
