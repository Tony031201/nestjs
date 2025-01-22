import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { History } from './history.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Injectable()
export class HistoryService {
    constructor(@InjectRepository(History) private repo:Repository<History>){}

    createHistory(user:User,question:string,answer:string){
        // const record = this.repo.create({question,answer,user,time:new Date()})
        // return this.repo.save(record)
        return 0
    }
}
