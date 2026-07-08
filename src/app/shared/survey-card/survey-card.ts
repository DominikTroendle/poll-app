import { Component, input } from '@angular/core';
import { SurveyStatus } from '../survey-status/survey-status';
import { SurveyMetaData } from '../interfaces/interfaces';

@Component({
  selector: 'app-survey-card',
  imports: [SurveyStatus],
  templateUrl: './survey-card.html',
  styleUrl: './survey-card.scss',
})
export class SurveyCard {
  surveyMetaData = input.required<SurveyMetaData>();
}
