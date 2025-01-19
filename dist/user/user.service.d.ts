import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    createUser(username: string): Promise<User>;
    find(username: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
}
