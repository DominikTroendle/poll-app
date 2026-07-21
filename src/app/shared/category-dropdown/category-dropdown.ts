import { Component, input, output } from '@angular/core';

type Category =
  | 'Team Activities'
  | 'Health & Wellness'
  | 'Gaming & Entertainment'
  | 'Education & Learning'
  | 'Lifestlye & Preferences'
  | 'Technology & Innovation';

@Component({
  selector: 'app-category-dropdown',
  imports: [],
  templateUrl: './category-dropdown.html',
  styleUrl: './category-dropdown.scss',
})
export class CategoryDropdown {
  isOpen = input(false);
  dropdownText = input<string>('');
  toggleRequested = output<void>();
  categorySelected = output<Category>();

  categories: Category[] = [
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

  setCategory(category: Category): void {
    this.selectedCategory = category;
    this.categorySelected.emit(category);
    this.requestToggle();
  }
}
