import { Component } from '@angular/core';
import { SurveyInput } from "../survey-input/survey-input";

@Component({
  selector: 'app-survey-form',
  imports: [SurveyInput],
  templateUrl: './survey-form.html',
  styleUrl: './survey-form.scss',
})
export class SurveyForm {}
