import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';
import { CategorynavComponent } from './app/categorynav/categorynav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './app/home/home.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, CategorynavComponent, HomeModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ecom';
}
