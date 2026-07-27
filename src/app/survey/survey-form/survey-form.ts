import { Component, input } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question';
import { ButtonPrimary } from '../../shared/button-primary/button-primary';
import { Answer, AnsweredQuestion, Question } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-form',
  imports: [SurveyQuestion, ButtonPrimary],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {
  completeSurveyButtonText = 'Complete survey';
  questions = input.required<Question[]>();
  disabled = input.required<boolean>();

  answeredQuestions: AnsweredQuestion[] = [];

  onAnswerChange(event: AnsweredQuestion): void {
    if (event.selectedAnswerIDs.length === 0) {
      this.answeredQuestions = this.answeredQuestions.filter(
        (question) => question.questionId !== event.questionId,
      );
      return;
    }
    const isExisting = this.answeredQuestions.findIndex(
      (question) => question.questionId === event.questionId,
    );
    if (isExisting === -1) {
      this.answeredQuestions.push(event);
    } else {
      this.answeredQuestions = this.answeredQuestions.map((question, index) =>
        index === isExisting ? event : question,
      );
    }
  }
}
