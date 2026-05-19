import { Component } from '@angular/core';
import { ButtonPrimary } from '../shared/button-primary/button-primary';

@Component({
  selector: 'app-create-survey',
  imports: [ButtonPrimary],
  templateUrl: './create-survey.html',
  styleUrl: './create-survey.scss',
})
export class CreateSurvey {
  createSurveyButtonText = 'Publish';
}
