import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyField } from './create-survey-field';

describe('CreateSurveyField', () => {
  let component: CreateSurveyField;
  let fixture: ComponentFixture<CreateSurveyField>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSurveyField],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSurveyField);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
