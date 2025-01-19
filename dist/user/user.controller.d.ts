import { UserService } from './user.service';
import { UserCreateDto } from './dtos/user-create.dto';
import { User } from './user.entity';
import { UserSigninDto } from './dtos/user-signin.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    whoami(user: User): User;
    signup(body: UserCreateDto, session: any): Promise<User>;
    signin(body: UserSigninDto, session: any): Promise<User>;
    signout(session: any): any;
}
