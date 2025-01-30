"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const user_create_dto_1 = require("./dtos/user-create.dto");
const auth_guard_1 = require("../guards/auth.guard");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const user_entity_1 = require("./user.entity");
const user_signin_dto_1 = require("./dtos/user-signin.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    whoami(user) {
        return user;
    }
    async signup(body, session) {
        console.log('signup function get:', body);
        if (body.answer.toLowerCase() === 'tony') {
            const user = await this.userService.createUser(body.username);
            session.userId = user.id;
            console.log('from signup ,user is:', session.userId);
            return user;
        }
    }
    async signin(body, session) {
        const users = await this.userService.find(body.username);
        if (users.length == 0) {
            throw new common_1.BadRequestException('User not found');
        }
        else {
            const user = users[0];
            session.userId = user.id;
            return user;
        }
    }
    signout(session) {
        session.userId = null;
        session.currentUser = null;
        return null;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('/whoami'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "whoami", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_create_dto_1.UserCreateDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_signin_dto_1.UserSigninDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "signin", null);
__decorate([
    (0, common_1.Get)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "signout", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map