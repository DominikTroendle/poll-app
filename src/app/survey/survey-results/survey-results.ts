import { Component, input } from '@angular/core';
import { SurveyResult } from '../survey-result/survey-result';
import {
  AnsweredQuestion,
  CommittedResponseAnswer,
  CommittedResults,
  Question,
} from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-results',
  imports: [SurveyResult],
  templateUrl: './survey-results.html',
  styleUrl: './survey-results.scss',
})
export class SurveyResults {
  expired = input<boolean>();
  questions = input.required<Question[]>();
  committedResults = input.required<CommittedResults[]>();
  draftResults = input.required<AnsweredQuestion[]>();
  isOpen = true;
  buttonText = 'Close results';

  get getImgSrc(): string {
    return this.isOpen ? 'svg/arrow-dropdown-open.svg' : 'svg/arrow-dropdown.svg';
  }

  toggleResultsVisibility(): void {
    this.isOpen = !this.isOpen;
    this.buttonText = this.isOpen ? 'Close results' : 'See results';
  }

  getQuestionResults(questionId: number): CommittedResponseAnswer[] {
    const question = this.questions().find((question) => question.id === questionId);
    if (!question) return [];
    const answerOptionIds = new Set(question.answer_options.map((option) => option.id));
    return this.committedResults()
      .flatMap((response) => response.response_answers)
      .filter((answer) => answerOptionIds.has(answer.answer_option_id));
  }

  getParticipantCount(questionId: number): number {
    const committedParticipants = this.committedResults().length;
    if (this.draftResults().some((answer) => answer.questionId === questionId)) {
      return committedParticipants + 1;
    } else {
      return committedParticipants;
    }
  }
}
