import { Component } from '@angular/core';
import { SurveyStatus } from '../../shared/survey-status/survey-status';

@Component({
  selector: 'app-survey-view',
  imports: [SurveyStatus],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {}
