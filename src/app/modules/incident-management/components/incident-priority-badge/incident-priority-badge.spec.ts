import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentPriorityBadge } from './incident-priority-badge';

describe('IncidentPriorityBadge', () => {
  let component: IncidentPriorityBadge;
  let fixture: ComponentFixture<IncidentPriorityBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentPriorityBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentPriorityBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
