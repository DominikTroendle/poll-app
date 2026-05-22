import { Component, input } from '@angular/core';

@Component({
  selector: 'app-create-survey-field',
  imports: [],
  templateUrl: './create-survey-field.html',
  styleUrl: './create-survey-field.scss',
})
export class CreateSurveyField {
  fieldTitle = input<string>('');
  fieldOption = input<string>('');
  fieldType = input<'text' | 'textarea'>('text');
}
