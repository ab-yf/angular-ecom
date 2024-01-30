import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, FontAwesomeModule],
  // In order to use the ratings comp in the products comp, the comp needs to be exported via shared module.
  // We import the module in our home.component.ts file as that is where we use it.
  exports:[RatingComponent]
})
export class SharedModule {}

