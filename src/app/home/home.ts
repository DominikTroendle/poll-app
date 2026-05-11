import { Component } from '@angular/core';
import { HeroVisual } from "./hero-section/hero-visual/hero-visual";

@Component({
  selector: 'app-home',
  imports: [HeroVisual],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
