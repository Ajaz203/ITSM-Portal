import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactAnalysis } from './impact-analysis';

describe('ImpactAnalysis', () => {
  let component: ImpactAnalysis;
  let fixture: ComponentFixture<ImpactAnalysis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactAnalysis],
    }).compileComponents();

    fixture = TestBed.createComponent(ImpactAnalysis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
