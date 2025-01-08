import { Injectable,BadRequestException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo:Repository<User>){}

    async createUser(username:string){
        const users = await this.repo.find({where:{username}})
        if(users.length != 0 ){
            throw new BadRequestException("User already exist.")
        }
        const user = this.repo.create({username})

        return this.repo.save(user)
    }

    async find(username:string){
        const user = await this.repo.find({where:{username}})
        return user;
    }

    async findOne(id:number){
        if(id){
            return this.repo.findOneBy({id})
        }else{
            return null;
        }
    }
}
