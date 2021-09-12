import { Question } from "./question.model";

export class Answer {
    constructor(
        public _id: string,
        public question: string | Question,
        public content: string,
        public status: boolean,
        public createdAt?: string,
        public updatedAt?: string,
    ) {}
}