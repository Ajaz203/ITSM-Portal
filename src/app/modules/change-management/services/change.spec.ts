import { TestBed } from '@angular/core/testing';

import { Change } from './change';

describe('Change', () => {
  let service: Change;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Change);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
