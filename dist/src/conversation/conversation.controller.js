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
exports.ConversationController = void 0;
const common_1 = require("@nestjs/common");
const conversation_service_1 = require("./conversation.service");
const create_question_dto_1 = require("./dtos/create-question.dto");
const auth_guard_1 = require("../guards/auth.guard");
const current_user_decorator_1 = require("../user/decorators/current-user.decorator");
const user_entity_1 = require("../user/user.entity");
let ConversationController = class ConversationController {
    constructor(conversationService) {
        this.conversationService = conversationService;
    }
    async pred(body, user) {
        const question = body.question;
        const answer = await this.conversationService.getAnswer(body.question, user);
        console.log('From conversationController: I got answer ', answer);
        return answer;
    }
};
exports.ConversationController = ConversationController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/pred'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_user_decorator_1.currentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], ConversationController.prototype, "pred", null);
exports.ConversationController = ConversationController = __decorate([
    (0, common_1.Controller)('conversation'),
    __metadata("design:paramtypes", [conversation_service_1.ConversationService])
], ConversationController);
//# sourceMappingURL=conversation.controller.js.map