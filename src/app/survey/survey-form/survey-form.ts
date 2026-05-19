import { Component } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question';
import { ButtonPrimary } from '../../shared/button-primary/button-primary';

@Component({
  selector: 'app-survey-form',
  imports: [SurveyQuestion, ButtonPrimary],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {
  completeSurveyButtonText = 'Complete';
}
