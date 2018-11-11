import { TestBed } from '@angular/core/testing';

import { BCCommServiceService } from './bccomm-service.service';

describe('BCCommServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BCCommServiceService = TestBed.get(BCCommServiceService);
    expect(service).toBeTruthy();
  });
});
