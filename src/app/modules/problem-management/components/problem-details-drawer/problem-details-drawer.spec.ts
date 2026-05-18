import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemDetailsDrawer } from './problem-details-drawer';

describe('ProblemDetailsDrawer', () => {
  let component: ProblemDetailsDrawer;
  let fixture: ComponentFixture<ProblemDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProblemDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(ProblemDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
