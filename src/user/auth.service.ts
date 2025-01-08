import { UserService } from "./user.service";
import { Injectable } from "@nestjs/common";

export class AuthService{
    constructor(private userService : UserService){}

    
}