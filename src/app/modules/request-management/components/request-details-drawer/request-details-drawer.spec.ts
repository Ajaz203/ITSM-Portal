import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsDrawer } from './request-details-drawer';

describe('RequestDetailsDrawer', () => {
  let component: RequestDetailsDrawer;
  let fixture: ComponentFixture<RequestDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
