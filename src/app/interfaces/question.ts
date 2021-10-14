import { Question } from "../models/question.model";

/**
 * Response to get all the questions
 */
export interface QuestionsResponse {
    total: number,
    questions: Question[]
}

/**
 * Data to creates a new question
 */
export interface CreateNewQuestion {
    sentence: string,
    category: string,
    score?: number
}