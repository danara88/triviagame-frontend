import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetTopRankingResponse } from '../interfaces/ranking';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) { }

  /**
   * This method wil get the top rankings from the backend
   * @param topNumber 
   * @returns 
   */
  getTopRankings(topNumber: number = 5): Observable<GetTopRankingResponse> {
    return this.http.get<GetTopRankingResponse>(`${ apiUrl }/rankings?topNumber=${ topNumber }`);
  }

}
