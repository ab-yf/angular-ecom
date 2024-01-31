import { StoreItem } from '../../../shared/storeItem';
import { Product } from '../../types/products.type';
import { ProductsService } from './products.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsStoreItem extends StoreItem<Product[]> {
  constructor(private productsService: ProductsService) {
    super([]);
  }

//  suscribe to getAllProducts method which will return all products
  async loadProducts(query?: string) {
    this.productsService.getAllProducts(query).subscribe((products) => {
      this.setValue(products);
    });
  }

// Return store prodcucts array as an observable
  get products$(): Observable<Product[]> {
    return this.value$;
  }
}
