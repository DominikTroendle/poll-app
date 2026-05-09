import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVisual } from './hero-visual';

describe('HeroVisual', () => {
  let component: HeroVisual;
  let fixture: ComponentFixture<HeroVisual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroVisual],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroVisual);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
