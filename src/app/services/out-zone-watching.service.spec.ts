import { TestBed } from '@angular/core/testing';

import { OutZoneWatchingService } from './out-zone-watching.service';

describe('OutZoneWatchingService', () => {
  let service: OutZoneWatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutZoneWatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
