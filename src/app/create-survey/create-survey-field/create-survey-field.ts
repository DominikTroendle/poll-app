import { Component, input } from '@angular/core';

export type CreateSurveyFieldType = 'text' | 'textarea';
export type CreateSurveyFieldLayout = 'default' | 'answer';
export interface CreateSurveyFieldConfig {
  id: string;
  name: string;
  title: string;
  optional?: boolean;
  type?: CreateSurveyFieldType;
  layout?: CreateSurveyFieldLayout;
}

@Component({
  selector: 'app-create-survey-field',
  imports: [],
  templateUrl: './create-survey-field.html',
  styleUrl: './create-survey-field.scss',
})
export class CreateSurveyField {
  field = input.required<CreateSurveyFieldConfig>();

  get optionalText(): string {
    return this.field().optional ? '(optional)' : '';
  }

  get type(): string {
    return this.field().type ?? 'text';
  }

  get layout(): string {
    return this.field().layout ?? 'default';
  }
}
