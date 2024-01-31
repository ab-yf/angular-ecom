import { Component } from '@angular/core';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { ProductsStoreItem } from './services/product/products.storeItem';

@Component({
  selector: 'app-homehome',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

// We need to call the storeItem method to fetch the categories from API and store in in state.
// This means that as soon as the home component is loaded, it will fetch the categories and save it in store.
export class HomehomeComponent {
  constructor(private categoriesStoreItem: CategoriesStoreItem, private productsStoreItem: ProductsStoreItem) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  // Filter results by category
  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts('subcategoryid= ' + subCategoryId);
  }
}
