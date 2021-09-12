import { User } from './user.model';
import { Category } from './category.model';

export class Game {
    constructor(
        public _id?: string,
        public user?: string | User,
        public category?: string | Category,
        public totalScore?: number,
        public startDateTime?: Date,
        public endDateTime?: Date,
        public timeGame?: string,
        public status?: boolean,
        public createdAt?: string,
        public updatedAt?: string,
    ) {}
}