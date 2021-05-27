import { TestBed } from '@angular/core/testing';

import { AurthorsService } from './aurthors.service';

describe('AurthorsService', () => {
  let service: AurthorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AurthorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
