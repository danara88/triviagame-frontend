import { Category } from '../models/category.model';

/**
 * Response of "get categories"
 */
export interface CategoriesResp {
    total: number,
    categories: Category[]
}