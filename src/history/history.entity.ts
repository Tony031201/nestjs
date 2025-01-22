import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,ManyToOne } from "typeorm";
import { User } from "src/user/user.entity";

@Entity()
export class History{
    @PrimaryGeneratedColumn()
    id:number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', nullable: false })
    time:Date;

    @Column()
    question:string;

    @Column()
    answer:string;

    @ManyToOne(()=>User,(user)=>{user.histories})
    user:User;
}