import { TestBed } from '@angular/core/testing';

import { HumanitarianDepartureService } from './humanitarian-departure.service';

describe('HumanitarianDepartureService', () => {
  let service: HumanitarianDepartureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanitarianDepartureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
