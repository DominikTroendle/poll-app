import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
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
  showSubmitError = input(false);

  today = new Date().toISOString().split('T')[0];

  get optionalText(): string {
    return this.field().optional ? '(optional)' : '';
  }

  get type(): string {
    return this.field().type ?? 'text';
  }

  get layout(): string {
    return this.field().layout ?? 'default';
  }

  get showControlError(): string {
    const control = this.control();
    const showError = control.touched || control.dirty;
    if (!showError) {
      return '';
    } else if (control.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }

  clearInput(): void {
    this.control().reset();
  }
}
