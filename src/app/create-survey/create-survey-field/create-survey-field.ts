import { ReturnStatement } from '@angular/compiler';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-create-survey-field',
  imports: [],
  templateUrl: './create-survey-field.html',
  styleUrl: './create-survey-field.scss',
})
export class CreateSurveyField {
  fieldTitle = input<string>('');
  fieldOptional = input<boolean>(false);
  fieldType = input<'text' | 'textarea'>('text');

  get getFieldOptionalText(): string {
    return this.fieldOptional() ? '(optional)' : '';
  }
}
