import { categories } from './../sampleData/categories.data';
import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';

// Injectable so it means it is a service and can be provided to other components
@Injectable({

  // Provide a signleton object of our service in the root of the application.
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Category[] {
    return categories
  }
}
