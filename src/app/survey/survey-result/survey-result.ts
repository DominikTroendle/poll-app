import { Component, input } from '@angular/core';
import { AnswerOptionResult, Question } from '../../shared/interfaces/interfaces';
import { ResultChart } from '../result-chart/result-chart';

@Component({
  selector: 'app-survey-result',
  imports: [ResultChart],
  templateUrl: './survey-result.html',
  styleUrl: './survey-result.scss',
})
export class SurveyResult {
  question = input.required<Question>();
  questionId = input<number>();
  questionResults = input.required<AnswerOptionResult[]>();
}
