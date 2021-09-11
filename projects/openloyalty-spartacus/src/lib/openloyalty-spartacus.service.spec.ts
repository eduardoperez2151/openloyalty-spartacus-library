import { TestBed } from '@angular/core/testing';

import { OpenloyaltySpartacusService } from './openloyalty-spartacus.service';

describe('OpenloyaltySpartacusService', () => {
  let service: OpenloyaltySpartacusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenloyaltySpartacusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
