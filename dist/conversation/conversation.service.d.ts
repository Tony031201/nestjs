import { HttpService } from '@nestjs/axios';
import { HistoryService } from 'src/history/history.service';
import { User } from 'src/user/user.entity';
export declare class ConversationService {
    private readonly httpService;
    private historyService;
    constructor(httpService: HttpService, historyService: HistoryService);
    getAnswer(question: string, user: User): Promise<string>;
}
