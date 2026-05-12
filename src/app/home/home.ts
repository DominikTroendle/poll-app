import { Component } from '@angular/core';
import { HeroVisual } from './hero-section/hero-visual/hero-visual';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { EndingSoon } from './ending-soon/ending-soon';
import { SurveyOverview } from './survey-overview/survey-overview';
import { HeroSection } from "./hero-section/hero-section";

@Component({
  selector: 'app-home',
  imports: [EndingSoon, SurveyOverview, HeroSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  
}
