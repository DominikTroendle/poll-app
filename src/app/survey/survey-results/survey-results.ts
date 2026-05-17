import { Component } from '@angular/core';

@Component({
  selector: 'app-survey-results',
  imports: [],
  templateUrl: './survey-results.html',
  styleUrl: './survey-results.scss',
})
export class SurveyResults {
  isOpen = true;
  buttonText = 'Close results';

  get getImgSrc(): string {
    return this.isOpen ? 'svg/arrow-dropdown-open.svg' : 'svg/arrow-dropdown.svg';
  }

  toggleResultsVisibility(): void {
    this.isOpen = !this.isOpen;
    this.buttonText = this.isOpen ? 'Close results' : 'See results';
  }
}
