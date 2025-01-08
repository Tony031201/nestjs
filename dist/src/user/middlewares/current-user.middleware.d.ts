import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { UserService } from "../user.service";
import { User } from "../user.entity";
declare module 'express-session' {
    interface SessionData {
        userId?: number;
    }
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
        }
    }
}
export declare class currentUserMiddleware implements NestMiddleware {
    private userService;
    constructor(userService: UserService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
