import { Component} from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-categorynav',
  templateUrl: './categorynav.component.html',
  styleUrl: './categorynav.component.scss'
})
export class CategorynavComponent {
  categories: Category[] = [];

  constructor(categoryService: CategoryService) {
    categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories.filter(category => category.parent_category_id === null);
    });
  }
}