import { Component } from '@angular/core';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { SurveyStatus } from '../shared/survey-status/survey-status';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  imports: [ButtonPrimary, SurveyStatus, RouterLink],
  templateUrl: './create-survey.html',
  styleUrl: './create-survey.scss',
})
export class CreateSurvey {
  createSurveyButtonText = 'Publish';
}
