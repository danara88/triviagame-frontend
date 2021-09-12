import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }

  /**
   * It will creates the game / starts the game
   * @param categoryID 
   * @returns 
   */
  createGame(categoryID: string): Observable<Game> {
    return this.http.post<Game>(`${ apiUrl }/games`, { category: categoryID });
  }

}
