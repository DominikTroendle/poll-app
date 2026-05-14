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
  categories = [
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestlye & Preferences',
    'Technology & Innovation',
  ];
  selectedCategory = '';

  get getImgSrc(): string {
    return this.isOpen() ? 'svg/arrow-dropdown-open.svg' : 'svg/arrow-dropdown.svg';
  }

  requestToggle(): void {
    this.toggleRequested.emit();
  }

  isCategorySelected(): boolean {
    return this.selectedCategory != '' && !this.isOpen();
  }

  setCategory(index: number): void {
    this.selectedCategory = this.categories[index];
    this.requestToggle();
  }
}
