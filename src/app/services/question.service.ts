import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionsResponse } from '../interfaces/question';

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

}
