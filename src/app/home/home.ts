import { Component } from '@angular/core';
import { HeroVisual } from './hero-section/hero-visual/hero-visual';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { EndingSoon } from './ending-soon/ending-soon';
import { SurveyOverview } from './survey-overview/survey-overview';

@Component({
  selector: 'app-home',
  imports: [HeroVisual, ButtonPrimary, EndingSoon, SurveyOverview],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeButtonText = 'New survey';
}
