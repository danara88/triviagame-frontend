import { Category } from './category.model';
import { Answer } from './answer.model';

export class Question {
    constructor(
        public _id?: string,
        public category?: Category | string,
        public sentence?: string,
        public options?: Answer[] | string[],
        public correctAnswer?: Answer | string,
        public selectedOption?: Answer,
        public score?: number,
        public status?: boolean,
        public createdAt?: string,
        public updatedAt?: string,
    ) {}
}