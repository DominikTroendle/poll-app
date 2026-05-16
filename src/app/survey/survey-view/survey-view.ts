import { Component } from '@angular/core';
import { SurveyStatus } from '../../shared/survey-status/survey-status';
import { SurveyForm } from "../survey-form/survey-form";

@Component({
  selector: 'app-survey-view',
  imports: [SurveyStatus, SurveyForm],
  templateUrl: './survey-view.html',
  styleUrl: './survey-view.scss',
})
export class SurveyView {}
