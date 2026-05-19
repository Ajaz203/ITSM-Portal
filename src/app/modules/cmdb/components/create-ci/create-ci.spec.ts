import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCi } from './create-ci';

describe('CreateCi', () => {
  let component: CreateCi;
  let fixture: ComponentFixture<CreateCi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCi],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateCi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
