import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { RegisterForm } from '../interfaces/user';
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
  register(data: RegisterForm): Observable<User> {
    return this.http.post<User>(`${ apiUrl }/users`, data);
  }
  
}
