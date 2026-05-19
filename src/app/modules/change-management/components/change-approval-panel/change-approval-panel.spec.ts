import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeApprovalPanel } from './change-approval-panel';

describe('ChangeApprovalPanel', () => {
  let component: ChangeApprovalPanel;
  let fixture: ComponentFixture<ChangeApprovalPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeApprovalPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeApprovalPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
