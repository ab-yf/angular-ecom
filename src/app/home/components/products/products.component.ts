import { Component } from '@angular/core';
import { ProductsStoreItem } from '../../services/product/products.storeItem';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  // The reason why we add providers as it indicates to the Angular compiler that 
  // the product service is a dependency of this component.
})

// export class ProductsComponent {
//   products: ProductListItem[] = [];

//   constructor(ProductsService: ProductsService) {
//     this.products = ProductsService.getProductsList();
//   }
// }

export class ProductsComponent {

  constructor(public productsStore: ProductsStoreItem) {

  }

}

