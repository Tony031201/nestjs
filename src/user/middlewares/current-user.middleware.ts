import { Injectable,NestMiddleware } from "@nestjs/common";
import { Request,Response,NextFunction } from "express";
import { UserService } from "../user.service";
import { User } from "../user.entity";
// types/express-session.d.ts
import session from 'express-session';

declare module 'express-session' {
    interface SessionData {
        userId?: number; // 如果 `userId` 是数字类型，根据实际情况调整
    }
}

declare global{
    namespace Express{
        interface Request{
            currentUser?:User;
        }
    }
}

@Injectable()
export class currentUserMiddleware implements NestMiddleware{
    constructor(private userService :UserService){}

    async use(req:Request,res:Response,next:NextFunction){
        const session = req.session as session.SessionData;
        const {userId} = req.session || {};

        if(userId){
            const user = await this.userService.findOne(userId)
            req.currentUser = user as User;
        }
        console.log('From middleware: now current user is ',req.currentUser)
        next()
    }
}