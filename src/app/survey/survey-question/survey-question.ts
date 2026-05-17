import { Component } from '@angular/core';
import { SurveyInput } from '../survey-input/survey-input';

@Component({
  selector: 'app-survey-question',
  imports: [SurveyInput],
  templateUrl: './survey-question.html',
  styleUrl: './survey-question.scss',
})
export class SurveyQuestion {}
