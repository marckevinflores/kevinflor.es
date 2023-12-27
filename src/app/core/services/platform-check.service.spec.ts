import { TestBed } from '@angular/core/testing';

import { PlatformCheckService } from './platform-check.service';

describe('PlatformCheckService', () => {
  let service: PlatformCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatformCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
