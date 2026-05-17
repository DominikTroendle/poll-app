import { Component } from '@angular/core';
import { SurveyQuestion } from '../survey-question/survey-question';

@Component({
  selector: 'app-survey-form',
  imports: [SurveyQuestion],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {}
