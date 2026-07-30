import { Component } from '@angular/core';
import { ButtonPrimary } from '../shared/button-primary/button-primary';
import { SurveyStatus } from '../shared/survey-status/survey-status';
import { RouterLink } from '@angular/router';
import { CreateSurveyField } from './create-survey-field/create-survey-field';
import { CategoryDropdown } from '../shared/category-dropdown/category-dropdown';
import { CreateSurveyQuestion } from './create-survey-question/create-survey-question';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category, SurveyForm, SurveyFormQuestion } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-create-survey',
  imports: [
    ButtonPrimary,
    SurveyStatus,
    RouterLink,
    CreateSurveyField,
    CategoryDropdown,
    CreateSurveyQuestion,
    ReactiveFormsModule,
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
  isPublished = false;

  newSurvey = new FormGroup<SurveyForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    category: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    endDate: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
    questions: new FormArray([this.createQuestionForm()]),
  });

  toggleCategoryDropdown(): void {
    const wasOpen = this.isCategoryDropdownOpen;
    this.isCategoryDropdownOpen = !this.isCategoryDropdownOpen;
    if (wasOpen) this.newSurvey.controls.category.markAsTouched();
  }

  closeCategoryDropdown(): void {
    if (!this.isCategoryDropdownOpen) return;
    this.isCategoryDropdownOpen = false;
    this.newSurvey.controls.category.markAsTouched();
  }

  addQuestion(): void {
    this.newSurvey.controls.questions.push(this.createQuestionForm());
  }

  createQuestionForm(): FormGroup<SurveyFormQuestion> {
    return new FormGroup<SurveyFormQuestion>({
      title: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      multiSelect: new FormControl(false, { nonNullable: true }),
      answers: new FormArray([
        new FormControl('', { nonNullable: true, validators: [Validators.required] }),
        new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      ]),
    });
  }

  selectCategory(category: Category | null): void {
    const categoryControl = this.newSurvey.controls.category;
    categoryControl.setValue(category ?? '');
    categoryControl.markAsDirty();
    categoryControl.markAsTouched();
  }

  onSubmit(): void {
    if (this.newSurvey.invalid) {
      this.newSurvey.markAllAsTouched();
      return;
    }
    this.isPublished = true;
    const survey = this.newSurvey.getRawValue();
    console.log(survey);
  }
}
