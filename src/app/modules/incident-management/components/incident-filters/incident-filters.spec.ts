import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentFilters } from './incident-filters';

describe('IncidentFilters', () => {
  let component: IncidentFilters;
  let fixture: ComponentFixture<IncidentFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
