import { Module,forwardRef } from '@nestjs/common';
import { ConversationService } from './conversation.service';
import { ConversationController } from './conversation.controller';
import { HttpModule } from '@nestjs/axios';
import { HistoryModule } from '../history/history.module';

@Module({
  exports:[ConversationService],
  imports:[
    HttpModule,
    forwardRef(() => HistoryModule)
  ],
  providers: [ConversationService],
  controllers: [ConversationController]
})
export class ConversationModule {}
