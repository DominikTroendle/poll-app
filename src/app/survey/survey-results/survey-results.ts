import { Component, input } from '@angular/core';
import { SurveyResult } from '../survey-result/survey-result';

@Component({
  selector: 'app-survey-results',
  imports: [SurveyResult],
  templateUrl: './survey-results.html',
  styleUrl: './survey-results.scss',
})
export class SurveyResults {
  expired = input<boolean>();
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
