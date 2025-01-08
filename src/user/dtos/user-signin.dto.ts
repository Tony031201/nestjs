import { IsString } from "class-validator";

export class UserSigninDto{
    @IsString()
    username:string;
}