import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterForm, RegisterAuthResponse, LoginRequest } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
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
   * Validate the auth token
   * @returns 
   */
  validateToken(): Observable<boolean> {
    return this.http.post<{token: string}>(`${ apiUrl }/auth/refresh`, {})
               .pipe(
                 tap(resp => {
                  localStorage.setItem('access_token', resp.token);
                 }),
                 map(resp => true),
                 catchError(error => of(false))
               );
  }

  /**
   * Log out
   */
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/auth/login');
  }
  
  
}
