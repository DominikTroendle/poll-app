import { Component, input, output } from '@angular/core';
import { Category } from '../interfaces/interfaces';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-category-dropdown',
  imports: [],
  templateUrl: './category-dropdown.html',
  styleUrl: './category-dropdown.scss',
})
export class CategoryDropdown {
  isOpen = input(false);
  dropdownText = input<string>('');
  control = input<FormControl>();
  toggleRequested = output<void>();
  categorySelected = output<Category | null>();

  categories: Category[] = [
    'Team Activities',
    'Health & Wellness',
    'Gaming & Entertainment',
    'Education & Learning',
    'Lifestyle & Preferences',
    'Technology & Innovation',
  ];
  selectedCategory: Category | null = null;

  get getImgSrc(): string {
    return this.isOpen() ? 'svg/arrow-dropdown-open.svg' : 'svg/arrow-dropdown.svg';
  }

  requestToggle(): void {
    this.toggleRequested.emit();
  }

  isCategorySelected(): boolean {
    return this.selectedCategory != null && !this.isOpen();
  }

  setCategory(category: Category): void {
    this.selectedCategory = category === this.selectedCategory ? null : category;
    this.categorySelected.emit(this.selectedCategory);
    this.requestToggle();
  }

  showRequiredError(): boolean {
    const categoryControl = this.control();
    if (!categoryControl) return false;
    return (
      categoryControl.hasError('required') && (categoryControl.touched || categoryControl.dirty)
    );
  }
}
