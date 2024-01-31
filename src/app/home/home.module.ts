import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { CategorynavComponent } from './components/categorynav/categorynav.component';
import { HomehomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryService } from './services/category.service';
import { CategoriesStoreItem } from './services/categories.storeItem';

@NgModule({
  declarations: [
    HomehomeComponent,
    HeaderComponent,
    CategorynavComponent,
    SidenavigationComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule, SharedModule, FontAwesomeModule, HttpClientModule,
  ],
  providers: [
    CategoryService, CategoriesStoreItem,
  ],
})
export class HomeModule { }
