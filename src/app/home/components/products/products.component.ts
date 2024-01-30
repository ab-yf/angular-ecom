import { Component, NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductListItem } from './products.type';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  // The reason why we add providers as it indicates to the Angular compiler that 
  // the product service is a dependency of this component.
  providers: [ProductsService]
})
export class ProductsComponent {
  products: ProductListItem[] = [];

  constructor(ProductsService: ProductsService) {
    this.products = ProductsService.getProductsList();
  }

}
