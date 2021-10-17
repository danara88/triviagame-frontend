import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Answer } from '../models/answer.model';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CreateAnswer } from '../interfaces/answer';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) { }

  /**
   * This method will create the answer
   * @param createAnswer 
   * @returns 
   */
  createAnswer(createAnswer: CreateAnswer): Observable<Answer> {
    return this.http.post<Answer>(`${ apiUrl }/answers`, createAnswer);
  }

}
