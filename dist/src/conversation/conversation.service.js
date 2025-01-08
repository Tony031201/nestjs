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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const axios_1 = require("@nestjs/axios");
const history_service_1 = require("../history/history.service");
let ConversationService = class ConversationService {
    constructor(httpService, historyService) {
        this.httpService = httpService;
        this.historyService = historyService;
    }
    async getAnswer(question, user) {
        try {
            console.log('From conversationService: I got question ', question);
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.post('http://localhost:8000/predict/', { question }));
            const answer = await response.data.answer;
            await this.historyService.createHistory(user, question, answer);
            return answer;
        }
        catch (error) {
            throw new Error(`Error communicating with Python service: ${error.message}`);
        }
    }
};
exports.ConversationService = ConversationService;
exports.ConversationService = ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService, history_service_1.HistoryService])
], ConversationService);
//# sourceMappingURL=conversation.service.js.map