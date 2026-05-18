import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAsset } from './edit-asset';

describe('EditAsset', () => {
  let component: EditAsset;
  let fixture: ComponentFixture<EditAsset>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAsset],
    }).compileComponents();

    fixture = TestBed.createComponent(EditAsset);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
