import { Component, input, output } from '@angular/core';
import { CreateSurveyFieldConfig } from '../../shared/interfaces/interfaces';
import { CreateSurveyField } from '../create-survey-field/create-survey-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SurveyFormQuestion } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-create-survey-question',
  imports: [CreateSurveyField, ReactiveFormsModule],
  templateUrl: './create-survey-question.html',
  styleUrl: './create-survey-question.scss',
})
export class CreateSurveyQuestion {
  questionNumber = input<number>(1);
  answers = [
    { id: 'a', label: 'A.' },
    { id: 'b', label: 'B.' },
  ];
  surveyQuestionControl = input.required<FormGroup<SurveyFormQuestion>>();
  removeRequested = output<void>();

  getAnswerField(answer: { id: string; label: string }): CreateSurveyFieldConfig {
    const questionNumber = this.questionNumber();
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
      { id: `${nextCharCode.toLowerCase()}`, label: `${nextCharCode}.` },
    ];
    this.surveyQuestionControl().controls.answers.push(new FormControl('', { nonNullable: true }));
  }

  handleQuestionAction(): void {
    if (this.questionNumber() === 1) {
      this.surveyQuestionControl().reset();
      return;
    }
    this.removeRequested.emit();
  }
}
