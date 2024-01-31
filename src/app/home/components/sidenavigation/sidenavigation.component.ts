import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { OnDestroy} from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})

// Now, we will add a procedure to provide the sample categories to our client.
// export class SidenavigationComponent 
//   categories: Category[] = [];
//   constructor (categoryService: CategoryService) {
//     this.categories = categoryService.getAllCategories();
//   }

//   getCategories(parentCategoryId?: number): Category[] {
//     return this.categories.filter(category => category.parent_category_id === parentCategoryId);
//   }
// }


export class SidenavigationComponent implements OnDestroy {
  categories: Category[] = [];
  subscriptions: Subscription = new Subscription();

  // We have added this code after we have linked our HTTP Client and are now sending our categories
  constructor(categoryStore: CategoriesStoreItem) {
    this.subscriptions.add(
      categoryStore.categories$.subscribe((categories) => {
        this.categories = categories;
      })
    );
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
