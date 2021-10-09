import { Category } from '../models/category.model';

/**
 * Response of "get categories"
 */
export interface CategoriesResp {
    total: number,
    categories: Category[]
}

/**
 * Properties to create a new category
 */
export interface CreateNewCategory {
    name: string,
    description: string
}