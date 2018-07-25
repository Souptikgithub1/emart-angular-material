import { TestBed, inject } from '@angular/core/testing';

import { RvpEventService } from './rvp-event.service';

describe('RvpEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RvpEventService]
    });
  });

  it('should be created', inject([RvpEventService], (service: RvpEventService) => {
    expect(service).toBeTruthy();
  }));
});
