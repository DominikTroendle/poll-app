import { Component } from '@angular/core';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { SurveyStatus } from '../shared/survey-status/survey-status';
import { RouterLink } from '@angular/router';
import { CreateSurveyField } from './create-survey-field/create-survey-field';
import { CategoryDropdown } from '../shared/category-dropdown/category-dropdown';
import { CreateSurveyQuestion } from './create-survey-question/create-survey-question';

@Component({
  selector: 'app-create-survey',
  imports: [
    ButtonPrimary,
    SurveyStatus,
    RouterLink,
    CreateSurveyField,
    CategoryDropdown,
    CreateSurveyQuestion,
  ],
  templateUrl: './create-survey.html',
  styleUrl: './create-survey.scss',
})
export class CreateSurvey {
  surveyNameField = {
    id: 'survey-name',
    name: 'survey-name',
    title: 'Survey name',
    type: 'text',
  } as const;

  endDateField = {
    id: 'end-date',
    name: 'end-date',
    title: 'Set end date',
    optional: true,
    type: 'text',
  } as const;

  descriptionField = {
    id: 'description',
    name: 'description',
    title: 'Describing text',
    optional: true,
    type: 'textarea',
  } as const;

  createSurveyButtonText = 'Publish';
  dropdownChooseText = 'Choose category';
  isCategoryDropdownOpen = false;
  questions = [{ id: 1 }];

  toggleCategoryDropdown(): void {
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
  }

  closeCategoryDropdown(): void {
    this.isCategoryDropdownOpen = false;
  }

  addQuestion(): void {
    const nextId = this.questions.length + 1;
    this.questions = [...this.questions, { id: nextId }];
  }
}
