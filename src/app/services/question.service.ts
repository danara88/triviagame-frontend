import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsResponse, CreateNewQuestion } from '../interfaces/question';
import { Question } from '../models/question.model';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  /**
   * Get all questions from a category
   * @param categoryID 
   */
  getQuestionsByCategory(categoryID: string): Observable<QuestionsResponse> {
    return this.http.get<QuestionsResponse>(`${ apiUrl }/questions/questions-by-category/${ categoryID }`);
  }

  /**
   * Create new question
   * @param question 
   * @returns 
   */
  createQuestion(question: CreateNewQuestion): Observable<Question> {
    return this.http.post<CreateNewQuestion>(`${ apiUrl }/questions`, question);
  }

  /**
   * This method will assign the correct answer to a question
   * @param questionId 
   * @param answerId 
   * @returns 
   */
  assignCorrectAnswer(questionId: string, answerId: string): Observable<Question> {
    let params = {
      answer: answerId
    }
    return this.http.put<Question>(`${ apiUrl }/questions/question-assign-correctanswer/${ questionId }`, params);
  }

}
