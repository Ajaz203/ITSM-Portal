import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentStatusBadge } from './incident-status-badge';

describe('IncidentStatusBadge', () => {
  let component: IncidentStatusBadge;
  let fixture: ComponentFixture<IncidentStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentStatusBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentStatusBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
