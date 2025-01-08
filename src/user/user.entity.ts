import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm";
import { History } from "src/history/history.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @OneToMany(()=>History,(history)=>{history.user})
    histories:History[]
}