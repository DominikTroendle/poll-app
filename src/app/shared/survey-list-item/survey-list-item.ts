import { Component, input } from '@angular/core';
import { SurveyStatus } from '../survey-status/survey-status';
import { SurveyMetaData } from '../interfaces/interfaces';

@Component({
  selector: 'app-survey-list-item',
  imports: [SurveyStatus],
  templateUrl: './survey-list-item.html',
  styleUrl: './survey-list-item.scss',
})
export class SurveyListItem {
  surveyMetaData = input.required<SurveyMetaData>();
  isPast = input<boolean>(false);
}
