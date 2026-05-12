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
  private readonly router = inject(Router);

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get logoSrc(): string {
    return this.isHomePage ? 'svg/plus-icon.svg' : 'svg/check-icon.svg';
  }
}
