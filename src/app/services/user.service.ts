import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterForm, RegisterResponse } from '../interfaces/user';
import { Observable } from 'rxjs';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Register a new user
   * @param data 
   * @returns 
   */
  register(data: RegisterForm): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${ apiUrl }/users`, data);
  }
  
}
