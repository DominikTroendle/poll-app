import { Component } from '@angular/core';
import { HeroVisual } from "./hero-section/hero-visual/hero-visual";
import { ButtonPrimary } from "../shared/button-primary/button-primary";

@Component({
  selector: 'app-home',
  imports: [HeroVisual, ButtonPrimary],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  homeButtonText = "New survey";
}
