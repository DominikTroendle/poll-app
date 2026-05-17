import { Component } from '@angular/core';
import { SurveyView } from './survey-view/survey-view';

@Component({
  selector: 'app-survey',
  imports: [SurveyView],
  templateUrl: './survey.html',
  styleUrl: './survey.scss',
})
export class Survey {}
