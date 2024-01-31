import { categories } from './../sampleData/categories.data';
import { Injectable } from '@angular/core';
import { Category } from '../types/category.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Injectable so it means it is a service and can be provided to other components
@Injectable({

  // Provide a signleton object of our service in the root of the application.
  providedIn: 'root'
})

// We will make an HTTP Call to our server application and ask for categories
// We import HTTP Client Module
export class CategoryService {

  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(
      'http://localhost:5001/productcategories'
    );
  }
}
