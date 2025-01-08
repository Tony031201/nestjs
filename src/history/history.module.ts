import { Module,forwardRef  } from '@nestjs/common';
import { HistoryService } from './history.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './history.entity';
import { ConversationModule } from '../conversation/conversation.module';

@Module({
  exports:[HistoryService],
  providers: [HistoryService],
  imports:[
    TypeOrmModule.forFeature([History]),
    forwardRef(() => ConversationModule),
  ]
})
export class HistoryModule {}
