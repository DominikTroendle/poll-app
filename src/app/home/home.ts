import { Component } from '@angular/core';
import { EndingSoon } from './ending-soon/ending-soon';
import { SurveyOverview } from './survey-overview/survey-overview';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-home',
  imports: [EndingSoon, SurveyOverview, HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
