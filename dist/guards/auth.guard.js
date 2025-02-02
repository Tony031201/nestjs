"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
class AuthGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.currentUser;
        return request.session.userId;
    }
}
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map