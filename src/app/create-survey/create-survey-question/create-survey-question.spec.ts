import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyQuestion } from './create-survey-question';

describe('CreateSurveyQuestion', () => {
  let component: CreateSurveyQuestion;
  let fixture: ComponentFixture<CreateSurveyQuestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSurveyQuestion],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSurveyQuestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
