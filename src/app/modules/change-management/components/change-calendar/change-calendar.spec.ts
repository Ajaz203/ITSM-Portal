import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCalendar } from './change-calendar';

describe('ChangeCalendar', () => {
  let component: ChangeCalendar;
  let fixture: ComponentFixture<ChangeCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
