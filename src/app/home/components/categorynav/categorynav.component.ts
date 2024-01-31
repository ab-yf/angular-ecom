import { Component, EventEmitter, Output} from '@angular/core';
import { CategoriesStoreItem } from '../../services/category/categories.storeItem';
import { Category } from '../../types/category.type';

@Component({
  selector: 'app-categorynav',
  templateUrl: './categorynav.component.html',
  styleUrl: './categorynav.component.scss'
})

export class CategorynavComponent {
  // categories: Category[] = [];
  @Output()
  categoryClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(public categoryStore: CategoriesStoreItem) {}

  onCategoryClick(category: Category): void {
    this.categoryClicked.emit(category.id);
  }
}
