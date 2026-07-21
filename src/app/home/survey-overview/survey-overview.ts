import { Component } from '@angular/core';
import { CategoryDropdown } from '../../shared/category-dropdown/category-dropdown';
import { SurveyList } from '../survey-list/survey-list';
import { Category } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-survey-overview',
  imports: [CategoryDropdown, SurveyList],
  templateUrl: './survey-overview.html',
  styleUrl: './survey-overview.scss',
})
export class SurveyOverview {
  activeSurveysSelected = true;
  isCategoryDropdownOpen = false;
  selectedCategory: Category | null = null;
  dropdownSortText = 'Sort by categories';

  toggleSurveySelection(): void {
    this.activeSurveysSelected = !this.activeSurveysSelected;
  }

  toggleCategoryDropdown(): void {
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
  }

  closeCategoryDropdown(): void {
    this.isCategoryDropdownOpen = false;
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
}
