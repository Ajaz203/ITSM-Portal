import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeReports } from './change-reports';

describe('ChangeReports', () => {
  let component: ChangeReports;
  let fixture: ComponentFixture<ChangeReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeReports],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
