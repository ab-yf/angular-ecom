import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from '../../types/products.type';
import { HttpClient } from '@angular/common/http';

// We have removed inRoot property because this service will only be used in the Product Component
@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  // We are now fetching the products from our database rather than static data locally.
  getAllProducts(query?: string): Observable<Product[]> {

    // adding functionality to filter products by category
    let url: string = 'http://localhost:5001/products';
    if (query) {
      url += '?' + query;
    }
    // If the query is supplied, we will conactenate to the URL and the return statement will palce the URL with the variable.
    return this.httpClient.get<Product[]>(url);
  }
}
