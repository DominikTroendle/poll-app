import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyInput } from './survey-input';

describe('SurveyInput', () => {
  let component: SurveyInput;
  let fixture: ComponentFixture<SurveyInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyInput],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
