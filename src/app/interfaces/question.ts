import { Question } from "../models/question.model";

export interface QuestionsResponse {
    total: number,
    questions: Question[]
}