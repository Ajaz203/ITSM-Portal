import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChange } from './edit-change';

describe('EditChange', () => {
  let component: EditChange;
  let fixture: ComponentFixture<EditChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditChange],
    }).compileComponents();

    fixture = TestBed.createComponent(EditChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
