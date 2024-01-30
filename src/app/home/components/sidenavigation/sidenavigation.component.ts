import { Component } from '@angular/core';
import { Category } from '../../types/category.type';
import { CategoryService } from '../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidenavigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenavigation.component.html',
  styleUrl: './sidenavigation.component.scss'
})

// Now, we will add a procedure to provide the sample categories to our client.
export class SidenavigationComponent {
  categories: Category[] = [];
  constructor (categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[] {
    return this.categories.filter(category => category.parent_category_id === parentCategoryId);
  }
}