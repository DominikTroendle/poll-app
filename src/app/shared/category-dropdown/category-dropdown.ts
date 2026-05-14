import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-category-dropdown',
  imports: [],
  templateUrl: './category-dropdown.html',
  styleUrl: './category-dropdown.scss',
})
export class CategoryDropdown {
  isOpen = input(false);
  toggleRequested = output<void>();

  get getImgSrc():string {
    return this.isOpen() ? 'svg/arrow-dropdown-open.svg' : 'svg/arrow-dropdown.svg';
  }

  requestToggle(): void {
    this.toggleRequested.emit();
  }
}
