import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFilters } from './request-filters';

describe('RequestFilters', () => {
  let component: RequestFilters;
  let fixture: ComponentFixture<RequestFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
