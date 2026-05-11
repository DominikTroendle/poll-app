import { Component } from '@angular/core';
import { HeroVisual } from './hero-visual/hero-visual';

@Component({
  selector: 'app-hero-section',
  imports: [HeroVisual],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.scss',
})
export class HeroSection {}
