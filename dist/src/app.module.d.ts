import { MiddlewareConsumer } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
export declare class AppModule {
    private configServer;
    constructor(configServer: ConfigService);
    configure(consumer: MiddlewareConsumer): void;
}
