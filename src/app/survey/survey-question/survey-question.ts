import { Component, input, output } from '@angular/core';
import { SurveyInput } from '../survey-input/survey-input';
import { AnsweredQuestion, Question, SelectedAnswer } from '../../shared/interfaces/interfaces';

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
  answeredQuestion = output<AnsweredQuestion>();

  selectedAnswerIDs: number[] = [];

  onSelectionChange(event: SelectedAnswer): void {
    if (event.selected) {
      this.question().allow_multiple_answers
        ? (this.selectedAnswerIDs = [...this.selectedAnswerIDs, event.answerOptionId])
        : (this.selectedAnswerIDs = [event.answerOptionId]);
    } else {
      this.question().allow_multiple_answers
        ? (this.selectedAnswerIDs = this.selectedAnswerIDs.filter(
            (id) => id !== event.answerOptionId,
          ))
        : (this.selectedAnswerIDs = []);
    }
    this.answeredQuestion.emit({
      questionId: this.question().id,
      selectedAnswerIDs: this.selectedAnswerIDs,
    });
  }
}
