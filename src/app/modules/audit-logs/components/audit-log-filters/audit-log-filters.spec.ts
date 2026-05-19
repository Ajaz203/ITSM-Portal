import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogFilters } from './audit-log-filters';

describe('AuditLogFilters', () => {
  let component: AuditLogFilters;
  let fixture: ComponentFixture<AuditLogFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditLogFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(AuditLogFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
