import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogTable } from './audit-log-table';

describe('AuditLogTable', () => {
  let component: AuditLogTable;
  let fixture: ComponentFixture<AuditLogTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditLogTable],
    }).compileComponents();

    fixture = TestBed.createComponent(AuditLogTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
