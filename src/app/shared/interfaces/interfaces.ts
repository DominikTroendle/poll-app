import { NumberSymbol } from '@angular/common';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export type Category =
  | 'Team Activities'
  | 'Health & Wellness'
  | 'Gaming & Entertainment'
  | 'Education & Learning'
  | 'Lifestyle & Preferences'
  | 'Technology & Innovation';

export interface SurveyMetaData {
  id: number;
  title: string;
  description: string;
  category: Category;
  ends_at: string;
}

export interface Answer {
  id: number;
  question_id: number;
  answer: string;
}

export interface Question {
  id: number;
  survey_id: number;
  question: string;
  allow_multiple_answers: boolean;
  answer_options: Answer[];
}

export interface SurveyWithQuestions extends SurveyMetaData {
  questions: Question[];
}

export interface CommittedResults {
  response_answers: CommittedResponseAnswer[];
}

export interface CommittedResponseAnswer {
  answer_option_id: number;
}

export interface SelectedAnswer {
  answerOptionId: number;
  selected: boolean;
}

export interface AnsweredQuestion {
  questionId: number;
  selectedAnswerIDs: number[];
}

export interface SurveyForm {
  title: FormControl<string>;
  category: FormControl<string>;
  endDate: FormControl<string>;
  description: FormControl<string>;
  questions: FormArray<FormGroup<SurveyFormQuestion>>;
}

export interface SurveyFormQuestion {
  title: FormControl<string>;
  multiSelect: FormControl<boolean>;
  answers: FormArray<FormControl<string>>;
}
