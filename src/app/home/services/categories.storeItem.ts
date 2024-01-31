
import { StoreItem } from '../../shared/storeItem';
import { Category } from '../types/category.type';
import { CategoryService } from './category.service';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class CategoriesStoreItem extends StoreItem<Category[]> {
  constructor(private categoryService: CategoryService) {
    super([]);
  }

  // Asynchrous loading while subscribing.
  async loadCategories() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.setValue(categories);
    });
  }

  get categories$(): Observable<Category[]> {
    return this.value$;
  }

  // map method will loop through the array of categories and will compare it with our filter method
  get topLevelCategories$(): Observable<Category[]> {
    return this.value$.pipe(
      map((categories) =>
        categories.filter((category) => category.parent_category_id === null)
      )
    );

    // As you can see the method load category is receiving all the categories from the service and is storing it in the behavior subject
  }
}
