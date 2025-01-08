import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { currentUserMiddleware } from './middlewares/current-user.middleware';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports:[TypeOrmModule.forFeature([User])]
})
export class UserModule {
  configure(consumer:MiddlewareConsumer){
    consumer.apply(currentUserMiddleware).forRoutes("*")
  }
}
