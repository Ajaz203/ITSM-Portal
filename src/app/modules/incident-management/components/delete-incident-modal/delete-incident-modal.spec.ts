import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteIncidentModal } from './delete-incident-modal';

describe('DeleteIncidentModal', () => {
  let component: DeleteIncidentModal;
  let fixture: ComponentFixture<DeleteIncidentModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteIncidentModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteIncidentModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
