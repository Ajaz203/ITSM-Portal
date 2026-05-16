import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentDetailsDrawer } from './incident-details-drawer';

describe('IncidentDetailsDrawer', () => {
  let component: IncidentDetailsDrawer;
  let fixture: ComponentFixture<IncidentDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
