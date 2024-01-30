import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CategorynavComponent } from './components/categorynav/categorynav.component';
import { SidenavigationComponent } from './components/sidenavigation/sidenavigation.component';
import { ProductsComponent } from './components/products/products.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RatingComponent } from '../shared/components/rating/rating.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-homehome',
  standalone: true,
  imports: [HeaderComponent, CategorynavComponent, SidenavigationComponent, ProductsComponent, RatingComponent, SharedModule, CommonModule, FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomehomeComponent {

}
