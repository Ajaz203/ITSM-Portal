import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiDetailsDrawer } from './ci-details-drawer';

describe('CiDetailsDrawer', () => {
  let component: CiDetailsDrawer;
  let fixture: ComponentFixture<CiDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(CiDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
