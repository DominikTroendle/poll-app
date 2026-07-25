import { Component, input, output } from '@angular/core';
import { Answer, SelectedAnswer } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-input',
  imports: [],
  templateUrl: './survey-input.html',
  styleUrl: './survey-input.scss',
})
export class SurveyInput {
  answer = input.required<Answer>();
  answerId = input.required<number>();
  multiSelect = input.required<boolean>();
  selectionChange = output<SelectedAnswer>();

  getAnswerLetter(): string {
    return String.fromCharCode(65 + this.answerId());
  }

  selectAnswer(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectionChange.emit({
      answerOptionId: Number(inputElement.value),
      selected: inputElement.checked,
    });
  }
}
