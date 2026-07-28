import { Component, input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-primary',
  imports: [],
  templateUrl: './button-primary.html',
  styleUrl: './button-primary.scss',
})
export class ButtonPrimary {
  buttonText = input<string>('');
  hasIcon = input<boolean>(true);
  buttonType = input<'button' | 'submit'>('button');
  disabled = input<boolean>();
  private readonly router = inject(Router);

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get isSurveyPage(): boolean {
    return this.router.url.startsWith('/survey/');
  }

  get logoSrc(): string {
    return this.isHomePage || this.isSurveyPage ? 'svg/plus-icon.svg' : 'svg/check-icon.svg';
  }
}
