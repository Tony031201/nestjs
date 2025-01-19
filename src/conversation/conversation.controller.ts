import { Controller,Post,Body,UseGuards } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { AuthGuard } from '../guards/auth.guard';
import { currentUser } from '../user/decorators/current-user.decorator';
import { User } from '../user/user.entity';

@Controller('conversation')
export class ConversationController {
    constructor( private conversationService :ConversationService){}

    @UseGuards(AuthGuard)
    @Post('/pred')
    async pred(@Body() body:CreateQuestionDto, @currentUser() user:User){
        const question = body.question;
        console.log('From conversation controller: question is',question)
        const answer = await this.conversationService.getAnswer(body.question,user)
        console.log('From conversationController: I got answer ',answer)
        return answer
    }
}
