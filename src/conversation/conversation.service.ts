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
            const pythonServiceUrl = process.env.PYTHON_SERVICE_URL
            console.log('From conversationService: Send the request to ',pythonServiceUrl)
            console.log('From conversationService: I got question ',question)
            
            const response = await firstValueFrom(
              this.httpService.post(pythonServiceUrl, { question }),
            );
            console.log('From conversationService: I got response ',question)
          const answer = await response.data.answer;
          await this.historyService.createHistory(user,question,answer)
          return answer;
        } catch (error) {
          console.error('Error communicating with Python service:', {
            message: error.message,
            config: error.config,
            response: error.response?.data || 'No response data',
            status: error.response?.status || 'No status',
        });
        throw new Error(`Error communicating with Python service: ${error.message}`);
        }
      }
}
