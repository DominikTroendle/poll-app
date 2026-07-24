import { Component, input } from '@angular/core';

@Component({
  selector: 'app-result-chart',
  imports: [],
  templateUrl: './result-chart.html',
  styleUrl: './result-chart.scss',
})
export class ResultChart {
  selectionCount = input.required<number>();
  participants = input.required<number>();

  calculatePercent(): number {
    const percent = (this.selectionCount() / this.participants()) * 100;
    return Math.round(percent);
  }
}
