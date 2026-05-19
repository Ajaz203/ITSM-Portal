import { TestBed } from '@angular/core/testing';

import { Cmdb } from './cmdb';

describe('Cmdb', () => {
  let service: Cmdb;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cmdb);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
