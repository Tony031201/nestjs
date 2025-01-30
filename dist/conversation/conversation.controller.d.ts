import { ConversationService } from './conversation.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
export declare class ConversationController {
    private conversationService;
    constructor(conversationService: ConversationService);
    pred(body: CreateQuestionDto): Promise<string>;
}
