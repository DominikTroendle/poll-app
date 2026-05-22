import { Component } from '@angular/core';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { SurveyStatus } from '../shared/survey-status/survey-status';
import { RouterLink } from '@angular/router';
import { CreateSurveyField } from './create-survey-field/create-survey-field';

@Component({
  selector: 'app-create-survey',
  imports: [ButtonPrimary, SurveyStatus, RouterLink, CreateSurveyField],
  templateUrl: './create-survey.html',
  styleUrl: './create-survey.scss',
})
export class CreateSurvey {
  createSurveyButtonText = 'Publish';
}
