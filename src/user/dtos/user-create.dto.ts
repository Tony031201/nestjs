import { IsString } from "class-validator";

export class UserCreateDto{
    @IsString()
    username:string;

    @IsString()
    answer:string;

}