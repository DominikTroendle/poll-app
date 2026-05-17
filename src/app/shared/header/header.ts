import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly router = inject(Router);

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get logoSrc(): string {
    return this.isHomePage ? 'svg/logo-home.svg' : 'svg/logo.svg';
  }
}
