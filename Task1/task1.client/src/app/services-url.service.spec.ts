import { TestBed } from '@angular/core/testing';

import { ServicesURLService } from './services-url.service';

describe('ServicesURLService', () => {
  let service: ServicesURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
