import { Component } from '@angular/core';
import { HeroVisual } from './hero-visual/hero-visual';
import { ButtonPrimary } from '../../shared/button-primary/button-primary';

@Component({
  selector: 'app-hero-section',
  imports: [HeroVisual, ButtonPrimary],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {
  homeButtonText = 'New survey';
}
