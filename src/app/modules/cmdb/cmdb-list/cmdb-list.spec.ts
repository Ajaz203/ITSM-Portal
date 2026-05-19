import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdbList } from './cmdb-list';

describe('CmdbList', () => {
  let component: CmdbList;
  let fixture: ComponentFixture<CmdbList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmdbList],
    }).compileComponents();

    fixture = TestBed.createComponent(CmdbList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
