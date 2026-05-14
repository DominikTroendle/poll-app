import { Component } from '@angular/core';
import { SurveyCard } from '../../shared/survey-card/survey-card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-ending-soon',
  imports: [SurveyCard, RouterLink],
  templateUrl: './ending-soon.html',
  styleUrl: './ending-soon.scss',
})
export class EndingSoon {}
