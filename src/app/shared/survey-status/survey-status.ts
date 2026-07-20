import { Component, input } from '@angular/core';

type SurveyStatusMode = 'remaining-days' | 'published';

@Component({
  selector: 'app-survey-status',
  imports: [],
  templateUrl: './survey-status.html',
  styleUrl: './survey-status.scss',
})
export class SurveyStatus {
  surveyEndDate = input<string>('');
  displayMode = input<SurveyStatusMode>('remaining-days');

  getRemainingDays(): number {
    const [year, month, day] = this.surveyEndDate().split('-').map(Number);
    const today = new Date();
    const currentDate = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
    const expirationDate = Date.UTC(year, month - 1, day);
    return Math.round((expirationDate - currentDate) / (1000 * 60 * 60 * 24));
  }
}
