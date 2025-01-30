import { Controller,Get,Post,Body,Session,UseGuards, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dtos/user-create.dto';
import { AuthGuard } from 'src/guards/auth.guard';
import { currentUser } from './decorators/current-user.decorator';
import { User } from './user.entity';
import { UserSigninDto } from './dtos/user-signin.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){
    }

    @Get('/whoami')
    @UseGuards(AuthGuard)
    whoami(@currentUser() user:User){
        return user;
    }

    // @Get('/whoami')
    // async whoami(@Session() session:any){
    //     const user = await this.userService.findOne(parseInt(session.userId))
    //     return user
    // }

    @Post('/signup')
    async signup(@Body() body:UserCreateDto,@Session() session:any){
        console.log('signup function get:',body);
        if (body.answer.toLowerCase() === 'tony'){
            const user = await this.userService.createUser(body.username)
            session.userId = user.id;
            console.log('from signup ,user is:',session.userId)
            return user
        }
    }

    @Post('/signin')
    async signin(@Body() body:UserSigninDto,@Session() session:any){
        const users = await this.userService.find(body.username)
        if(users.length==0){
            throw new BadRequestException('User not found')
        }else{
            const user = users[0]
            session.userId = user.id;
            return user;
        }
    }

    @Get('/signout')
    signout(@Session() session:any){
        session.userId = null;
        session.currentUser = null;
        return null;
    }

}
