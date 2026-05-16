import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIncident } from './edit-incident';

describe('EditIncident', () => {
  let component: EditIncident;
  let fixture: ComponentFixture<EditIncident>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditIncident],
    }).compileComponents();

    fixture = TestBed.createComponent(EditIncident);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
