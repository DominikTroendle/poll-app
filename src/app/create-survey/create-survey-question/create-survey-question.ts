import { Component, input } from '@angular/core';
import {
  CreateSurveyField,
  CreateSurveyFieldConfig,
} from '../create-survey-field/create-survey-field';

@Component({
  selector: 'app-create-survey-question',
  imports: [CreateSurveyField],
  templateUrl: './create-survey-question.html',
  styleUrl: './create-survey-question.scss',
})
export class CreateSurveyQuestion {
  questionNumber = input<number>(1);
  answers = [
    { id: 'a', label: 'A.' },
    { id: 'b', label: 'B.' },
  ];

  getAnswerField(answer: { id: string; label: string }): CreateSurveyFieldConfig {
    const questionNumber = this.questionNumber;
    return {
      id: `question-${questionNumber}-answer-${answer.id}`,
      name: `question-${questionNumber}-answer-${answer.id}`,
      title: answer.label,
      type: 'text',
      layout: 'answer',
    };
  }

  addAnswer(): void {
    const lastAnswerId = this.answers.at(-1)!.label;
    const nextCharCode = String.fromCharCode(lastAnswerId.charCodeAt(0) + 1);
    this.answers = [
      ...this.answers,
      { id: `${nextCharCode.toLowerCase}`, label: `${nextCharCode}.` },
    ];
  }
}
