import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';

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


// We have added this code after we have linked our HTTP Client and are now sending our categories
export class SidenavigationComponent {
  categories: Category[] = [];
  
  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(categories);
    });
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
}
