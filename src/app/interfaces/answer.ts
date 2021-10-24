import { Answer } from "../models/answer.model";
import { Question } from '../models/question.model';

/**
 * Data to create a new answer
 */
export interface CreateAnswer {
    question: string,
    content: string,
}

/**
 * This is the response when a new answer is created
 */
export interface CreateAnswerResp {
    answer: Answer,
    question: Question
}