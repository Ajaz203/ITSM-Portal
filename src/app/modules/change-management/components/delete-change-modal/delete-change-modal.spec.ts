import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChangeModal } from './delete-change-modal';

describe('DeleteChangeModal', () => {
  let component: DeleteChangeModal;
  let fixture: ComponentFixture<DeleteChangeModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteChangeModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteChangeModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
