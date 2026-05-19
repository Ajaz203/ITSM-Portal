import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipMap } from './relationship-map';

describe('RelationshipMap', () => {
  let component: RelationshipMap;
  let fixture: ComponentFixture<RelationshipMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelationshipMap],
    }).compileComponents();

    fixture = TestBed.createComponent(RelationshipMap);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
