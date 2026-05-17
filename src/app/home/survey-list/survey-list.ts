import { Component } from '@angular/core';
import { SurveyListItem } from '../../shared/survey-list-item/survey-list-item';

@Component({
  selector: 'app-survey-list',
  imports: [SurveyListItem],
  templateUrl: './survey-list.html',
  styleUrl: './survey-list.scss',
})
export class SurveyList {}
