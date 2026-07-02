import { Component, HostBinding, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonPrimary } from '../button-primary/button-primary';

@Component({
  selector: 'app-header',
  imports: [ButtonPrimary, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  headerButtonText = 'Create survey';
  private readonly router = inject(Router);

  @HostBinding('class.header-host--home')
  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get isSurveyPage(): boolean {
    return this.router.url.startsWith('/survey/');
  }

  get logoSrc(): string {
    return this.isHomePage ? 'svg/logo-home.svg' : 'svg/logo.svg';
  }
}
