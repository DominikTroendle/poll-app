import { Component, input } from '@angular/core';
import { Answer } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-input',
  imports: [],
  templateUrl: './survey-input.html',
  styleUrl: './survey-input.scss',
})
export class SurveyInput {
  answer = input<Answer>();
}
