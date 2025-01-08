import { User } from "src/user/user.entity";
export declare class History {
    id: number;
    time: Date;
    question: string;
    answer: string;
    user: User;
}
