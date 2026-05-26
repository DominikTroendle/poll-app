import { Component } from '@angular/core';
import { CreateSurveyField } from '../create-survey-field/create-survey-field';

@Component({
  selector: 'app-create-survey-question',
  imports: [CreateSurveyField],
  templateUrl: './create-survey-question.html',
  styleUrl: './create-survey-question.scss',
})
export class CreateSurveyQuestion {}
