import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChart } from './result-chart';

describe('ResultChart', () => {
  let component: ResultChart;
  let fixture: ComponentFixture<ResultChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultChart],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
