import { TestBed } from '@angular/core/testing';

import { TestOtpService } from './test-otp.service';

describe('TestOtpService', () => {
  let service: TestOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
