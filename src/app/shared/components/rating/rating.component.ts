import { Component, Input } from '@angular/core';
import { IconDefinition, faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})



// Accepts ratings between the numbers 0 & 5
export class RatingComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];
  private _score: number = 0;

  @Input()
  set score(val: number) {
    // If the value is 5, if not, then the value itself.
    this._score = val > 5 ? 5 : val;
    const solidStarCount: number = Math.floor(this._score);
    for (let i: number = 0; i < solidStarCount; i++) {
      // Push the value to the starts array using push method
      this.stars.push(faStar);
    }

    // if the score - solidStarCount is greater than 0 and is less than 1 after - solidStarCount, then we will add the faStarHalfStroke to the array
    if (this._score - solidStarCount > 0 && this._score - solidStarCount < 1) {
      this.stars.push(faStarHalfStroke);
    }

    for (let i: number = this.stars.length; i < 5; i++) {
      this.stars.push(faStarEmpty);
    }
  }
}

