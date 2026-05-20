import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestPriorityBadge } from './request-priority-badge';

describe('RequestPriorityBadge', () => {
  let component: RequestPriorityBadge;
  let fixture: ComponentFixture<RequestPriorityBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestPriorityBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestPriorityBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
