import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTopology } from './service-topology';

describe('ServiceTopology', () => {
  let component: ServiceTopology;
  let fixture: ComponentFixture<ServiceTopology>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTopology],
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceTopology);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
