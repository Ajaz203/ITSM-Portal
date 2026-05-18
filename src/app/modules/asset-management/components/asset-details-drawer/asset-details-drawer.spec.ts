import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetDetailsDrawer } from './asset-details-drawer';

describe('AssetDetailsDrawer', () => {
  let component: AssetDetailsDrawer;
  let fixture: ComponentFixture<AssetDetailsDrawer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetDetailsDrawer],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetDetailsDrawer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
