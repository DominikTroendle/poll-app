import { Component, input } from '@angular/core';
import { SurveyInput } from '../survey-input/survey-input';
import { Question, SelectedAnswer } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-question',
  imports: [SurveyInput],
  templateUrl: './survey-question.html',
  styleUrl: './survey-question.scss',
})
export class SurveyQuestion {
  question = input.required<Question>();
  questionId = input.required<number>();
  disabled = input.required<boolean>();

  selectedAnswerIDs: number[] = [];

  storeSelectedAnswer(selection: SelectedAnswer): void {
    this.question().allow_multiple_answers
      ? (this.selectedAnswerIDs = [...this.selectedAnswerIDs, selection.answerOptionId])
      : (this.selectedAnswerIDs = [selection.answerOptionId]);
  }
}
