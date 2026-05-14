import { Component } from '@angular/core';
import { SurveyStatus } from "../survey-status/survey-status";

@Component({
  selector: 'app-survey-list-item',
  imports: [SurveyStatus],
  templateUrl: './survey-list-item.html',
  styleUrl: './survey-list-item.scss',
})
export class SurveyListItem {}
