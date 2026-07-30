import { Component, input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { CreateSurveyFieldConfig } from '../../shared/interfaces/interfaces';

@Component({
  selector: 'app-create-survey-field',
  imports: [ReactiveFormsModule],
  templateUrl: './create-survey-field.html',
  styleUrl: './create-survey-field.scss',
})
export class CreateSurveyField {
  field = input.required<CreateSurveyFieldConfig>();
  control = input.required<FormControl>();

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
