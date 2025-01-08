import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { HttpService, } from '@nestjs/axios';
import { HistoryService } from 'src/history/history.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class ConversationService {
    constructor(private readonly httpService: HttpService,private historyService:HistoryService) {}

    async getAnswer(question: string,user:User): Promise<string> {
        try {
            console.log('From conversationService: I got question ',question)
            const response = await firstValueFrom(
            this.httpService.post('http://localhost:8000/predict/', { question }),
          );
          const answer = await response.data.answer;
          await this.historyService.createHistory(user,question,answer)
          return answer;
        } catch (error) {
          throw new Error(`Error communicating with Python service: ${error.message}`);
        }
      }
}
