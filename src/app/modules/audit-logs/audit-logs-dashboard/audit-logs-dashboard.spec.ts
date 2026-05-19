import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogsDashboard } from './audit-logs-dashboard';

describe('AuditLogsDashboard', () => {
  let component: AuditLogsDashboard;
  let fixture: ComponentFixture<AuditLogsDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditLogsDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(AuditLogsDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
