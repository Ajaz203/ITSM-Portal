import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChange } from './create-change';

describe('CreateChange', () => {
  let component: CreateChange;
  let fixture: ComponentFixture<CreateChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateChange],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
