import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlaReports } from './sla-reports';

describe('SlaReports', () => {
  let component: SlaReports;
  let fixture: ComponentFixture<SlaReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlaReports],
    }).compileComponents();

    fixture = TestBed.createComponent(SlaReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
