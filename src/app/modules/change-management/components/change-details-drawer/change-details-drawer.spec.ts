import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetailsDrawer } from './change-details-drawer';

describe('ChangeDetailsDrawer', () => {
  let component: ChangeDetailsDrawer;
  let fixture: ComponentFixture<ChangeDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
