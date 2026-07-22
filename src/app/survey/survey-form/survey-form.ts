import { Component, input } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question';
import { ButtonPrimary } from '../../shared/button-primary/button-primary';
import { Question } from '../../shared/interfaces/interfaces';

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
}
