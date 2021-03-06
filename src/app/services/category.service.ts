import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoriesResp, CreateNewCategory } from '../interfaces/category';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

const apiUrl = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  /**
   * Get all the categories
   * @returns 
   */
  getCategories(from: number = 0, limit: number = 40): Observable<CategoriesResp> {
    return this.http.get<CategoriesResp>(`${ apiUrl }/categories?from=${from}&limit=${limit}`);
  }

  /**
   * Creates a new category
   */
  createCategory(createNewCategory: CreateNewCategory): Observable<Category> {
    return this.http.post<Category>(`${ apiUrl }/categories`, createNewCategory);
  }

}
