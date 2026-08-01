import { TestBed } from '@angular/core/testing';

import { SurveyParticipation } from './survey-participation';

describe('SurveyParticipation', () => {
  let service: SurveyParticipation;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyParticipation);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
