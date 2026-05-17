import { Component } from '@angular/core';
import { SurveyInput } from '../survey-input/survey-input';
import { SurveyQuestion } from '../survey-question/survey-question';

@Component({
  selector: 'app-survey-form',
  imports: [SurveyQuestion, SurveyInput],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {}
