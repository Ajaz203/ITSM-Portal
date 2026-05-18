import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetStatusBadge } from './asset-status-badge';

describe('AssetStatusBadge', () => {
  let component: AssetStatusBadge;
  let fixture: ComponentFixture<AssetStatusBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetStatusBadge],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetStatusBadge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
