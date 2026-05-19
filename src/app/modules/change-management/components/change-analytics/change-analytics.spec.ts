import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeAnalytics } from './change-analytics';

describe('ChangeAnalytics', () => {
  let component: ChangeAnalytics;
  let fixture: ComponentFixture<ChangeAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
