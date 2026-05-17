import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyResult } from './survey-result';

describe('SurveyResult', () => {
  let component: SurveyResult;
  let fixture: ComponentFixture<SurveyResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyResult],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
