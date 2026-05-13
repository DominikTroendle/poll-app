import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyListItem } from './survey-list-item';

describe('SurveyListItem', () => {
  let component: SurveyListItem;
  let fixture: ComponentFixture<SurveyListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SurveyListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
