import { Component } from '@angular/core';
import { SurveyStatus } from '../../shared/survey-status/survey-status';
import { SurveyForm } from '../survey-form/survey-form';
import { SurveyResults } from '../survey-results/survey-results';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survey-view',
  imports: [SurveyStatus, SurveyForm, SurveyResults, RouterLink],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {}
