import { Repository } from 'typeorm';
import { History } from './history.entity';
import { User } from 'src/user/user.entity';
export declare class HistoryService {
    private repo;
    constructor(repo: Repository<History>);
    createHistory(user: User, question: string, answer: string): number;
}
