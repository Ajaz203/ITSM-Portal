import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportCenter } from './export-center';

describe('ExportCenter', () => {
  let component: ExportCenter;
  let fixture: ComponentFixture<ExportCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExportCenter],
    }).compileComponents();

    fixture = TestBed.createComponent(ExportCenter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
