import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProblemModal } from './delete-problem-modal';

describe('DeleteProblemModal', () => {
  let component: DeleteProblemModal;
  let fixture: ComponentFixture<DeleteProblemModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProblemModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteProblemModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
