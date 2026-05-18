import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAssetModal } from './delete-asset-modal';

describe('DeleteAssetModal', () => {
  let component: DeleteAssetModal;
  let fixture: ComponentFixture<DeleteAssetModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteAssetModal],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteAssetModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
