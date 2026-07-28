import { Component, computed, input } from '@angular/core';
import { getRemainingDays } from '../utils/survey-date';

type SurveyStatusMode = 'remaining-days' | 'published' | 'expired' | 'draft';

@Component({
  selector: 'app-survey-status',
  imports: [],
  templateUrl: './survey-status.html',
  styleUrl: './survey-status.scss',
})
export class SurveyStatus {
  surveyEndDate = input<string>('');
  displayMode = input<SurveyStatusMode>('remaining-days');

  daysRemaining = computed(() => getRemainingDays(this.surveyEndDate()));
}
