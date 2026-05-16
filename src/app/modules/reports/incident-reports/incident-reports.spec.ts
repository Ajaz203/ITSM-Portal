import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentReports } from './incident-reports';

describe('IncidentReports', () => {
  let component: IncidentReports;
  let fixture: ComponentFixture<IncidentReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentReports],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
