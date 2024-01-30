import { Injectable } from '@angular/core';
import { ProductListItem } from './products.type';
import { products } from './products.data';

// We have removed inRoot property because this service will only be used in the Product Component
@Injectable()
export class ProductsService {

  constructor() { }

  getProductsList(): ProductListItem[] {
    return products;
  }
}
