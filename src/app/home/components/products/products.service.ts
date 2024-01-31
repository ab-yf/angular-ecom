import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Product } from './products.type';
import { HttpClient } from '@angular/common/http';

// We have removed inRoot property because this service will only be used in the Product Component
@Injectable()
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  // We are now fetching the products from our database rather than static data locally.
  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:5001/products');
  }
}
