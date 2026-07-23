import { Component, input } from '@angular/core';
import { AnswerOptionResult } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-result-chart',
  imports: [],
  templateUrl: './result-chart.html',
  styleUrl: './result-chart.scss',
})
export class ResultChart {
  result = input.required<AnswerOptionResult>();
  participants = 7;

  calculatePercent(): number {
    const percent = (this.result().selection_count / this.participants) * 100;
    return Math.round(percent);
  }
}
