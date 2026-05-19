import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCi } from './edit-ci';

describe('EditCi', () => {
  let component: EditCi;
  let fixture: ComponentFixture<EditCi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCi],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
