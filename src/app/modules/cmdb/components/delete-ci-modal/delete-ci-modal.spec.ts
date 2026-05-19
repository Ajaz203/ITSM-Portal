import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCiModal } from './delete-ci-modal';

describe('DeleteCiModal', () => {
  let component: DeleteCiModal;
  let fixture: ComponentFixture<DeleteCiModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCiModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCiModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
