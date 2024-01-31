import { Component} from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';

@Component({
  selector: 'app-categorynav',
  templateUrl: './categorynav.component.html',
  styleUrl: './categorynav.component.scss'
})
export class CategorynavComponent {
  // categories: Category[] = [];

  constructor(public categoryStore: CategoriesStoreItem) {
  }
}