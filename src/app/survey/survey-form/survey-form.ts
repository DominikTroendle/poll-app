import { Component } from '@angular/core';
import { SurveyStatus } from "../../shared/survey-status/survey-status";

@Component({
  selector: 'app-survey-form',
  imports: [SurveyStatus],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {}
