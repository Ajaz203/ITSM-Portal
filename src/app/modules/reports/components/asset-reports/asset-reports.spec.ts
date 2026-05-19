import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetReports } from './asset-reports';

describe('AssetReports', () => {
  let component: AssetReports;
  let fixture: ComponentFixture<AssetReports>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetReports],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetReports);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
