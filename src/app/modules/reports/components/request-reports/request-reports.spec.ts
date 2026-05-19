import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestReports } from './request-reports';

describe('RequestReports', () => {
  let component: RequestReports;
  let fixture: ComponentFixture<RequestReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestReports],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
