import { HttpService } from '@nestjs/axios';
import { HistoryService } from 'src/history/history.service';
export declare class ConversationService {
    private readonly httpService;
    private historyService;
    constructor(httpService: HttpService, historyService: HistoryService);
    getAnswer(question: string): Promise<string>;
}
