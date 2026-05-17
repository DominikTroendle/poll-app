import { Component } from '@angular/core';
import { ResultChart } from '../result-chart/result-chart';

@Component({
  selector: 'app-survey-result',
  imports: [ResultChart],
  templateUrl: './survey-result.html',
  styleUrl: './survey-result.scss',
})
export class SurveyResult {}
