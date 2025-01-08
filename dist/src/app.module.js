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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const conversation_module_1 = require("./conversation/conversation.module");
const history_module_1 = require("./history/history.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const cookieSession = require('cookie-session');
const typeorm_config_1 = require("./config/typeorm.config");
let AppModule = class AppModule {
    constructor(configServer) {
        this.configServer = configServer;
    }
    configure(consumer) {
        consumer.apply(cookieSession({
            keys: [this.configServer.get('COOKIE_KEY')]
        })).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env.${process.env.NODE_ENV}`,
            }),
            user_module_1.UserModule,
            conversation_module_1.ConversationModule,
            history_module_1.HistoryModule,
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: typeorm_config_1.TypeOrmConfigService,
            })
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    }),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppModule);
//# sourceMappingURL=app.module.js.map