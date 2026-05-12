import { Component } from '@angular/core';
import { SurveyStatus } from '../survey-status/survey-status';

@Component({
  selector: 'app-survey-card',
  imports: [SurveyStatus],
  templateUrl: './survey-card.html',
  styleUrl: './survey-card.scss',
})
export class SurveyCard {}
