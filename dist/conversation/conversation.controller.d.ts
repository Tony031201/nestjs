import { ConversationService } from './conversation.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { User } from '../user/user.entity';
export declare class ConversationController {
    private conversationService;
    constructor(conversationService: ConversationService);
    pred(body: CreateQuestionDto, user: User): Promise<string>;
}
