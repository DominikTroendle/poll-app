import { Component, input } from '@angular/core';
import { CreateSurveyField } from '../create-survey-field/create-survey-field';

@Component({
  selector: 'app-create-survey-question',
  imports: [CreateSurveyField],
  templateUrl: './create-survey-question.html',
  styleUrl: './create-survey-question.scss',
})
export class CreateSurveyQuestion {
  questionNumber = input<number>(1);
  answers = [{ id: 'A.' }, { id: 'B.' }];

  addAnswer(): void {
    const lastAnswerId = this.answers.at(-1)!.id;
    const nextCharCode = String.fromCharCode(lastAnswerId.charCodeAt(0) + 1);
    this.answers = [...this.answers, { id: `${nextCharCode}.` }];
  }
}
