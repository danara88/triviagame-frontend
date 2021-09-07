import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterForm, RegisterAuthResponse, LoginRequest } from '../interfaces/user';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  /**
   * Get user identity
   * @returns 
   */
  getIdentity(): User | null {
    let identity = JSON.parse(localStorage.getItem('identity')!); 
    if (identity !== undefined) return identity;
    return null;
  }

  /**
   * Register a new user
   * @param data 
   * @returns 
   */
  register(data: RegisterForm): Observable<RegisterAuthResponse> {
    return this.http.post<RegisterAuthResponse>(`${ apiUrl }/users`, data);
  }
  
  /**
   * Login user
   * @param data 
   * @returns 
   */
  login(data: LoginRequest): Observable<RegisterAuthResponse> {
    return this.http.post<RegisterAuthResponse>(`${ apiUrl }/auth/login`, data);
  }

  /**
   * Log out
   */
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
  
  
}
