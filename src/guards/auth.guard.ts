import { CanActivate,ExecutionContext } from "@nestjs/common";  
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const user = request.currentUser;
        return request.session.userId;
    }
}